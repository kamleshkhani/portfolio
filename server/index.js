require("dotenv").config()

const { randomUUID } = require("crypto")
const express = require("express")
const fs = require("fs/promises")
const nodemailer = require("nodemailer")
const path = require("path")

const app = express()
const port = process.env.PORT || 5050
const submissionsFile = path.join(__dirname, "data", "submissions.json")

const smtpPort = Number(process.env.SMTP_PORT || 587)
const smtpSecure = String(process.env.SMTP_SECURE || "false").toLowerCase() === "true"
const smtpHost = process.env.SMTP_HOST || ""
const smtpUser = process.env.SMTP_USER || ""
const smtpPass = process.env.SMTP_PASS || ""
const contactReceiver = process.env.CONTACT_RECEIVER || smtpUser
const contactSenderName = process.env.CONTACT_SENDER_NAME || "Kamlesh Singh Portfolio"

app.use(express.json({ limit: "1mb" }))

function hasMailConfig() {
  return Boolean(smtpHost && smtpPort && smtpUser && smtpPass && contactReceiver)
}

function createTransporter() {
  return nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass
    }
  })
}

async function ensureStorage() {
  await fs.mkdir(path.dirname(submissionsFile), { recursive: true })

  try {
    await fs.access(submissionsFile)
  } catch {
    await fs.writeFile(submissionsFile, "[]\n", "utf8")
  }
}

async function readSubmissions() {
  await ensureStorage()

  const raw = await fs.readFile(submissionsFile, "utf8")

  try {
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

async function writeSubmissions(submissions) {
  await fs.writeFile(submissionsFile, `${JSON.stringify(submissions, null, 2)}\n`, "utf8")
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
}

function buildEmailContent(submission) {
  const subject = `New portfolio contact from ${submission.name}`
  const text = [
    "You received a new message from the portfolio contact form.",
    "",
    `Name: ${submission.name}`,
    `Email: ${submission.email}`,
    `Submitted: ${submission.createdAt}`,
    "",
    "Message:",
    submission.message
  ].join("\n")

  const html = `
    <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
      <h2 style="margin-bottom: 12px;">New Portfolio Contact Message</h2>
      <p style="margin: 0 0 18px;">You received a new message from the portfolio contact form.</p>
      <table style="border-collapse: collapse; width: 100%; max-width: 680px;">
        <tr>
          <td style="padding: 8px 0; font-weight: 700; width: 120px;">Name</td>
          <td style="padding: 8px 0;">${escapeHtml(submission.name)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: 700;">Email</td>
          <td style="padding: 8px 0;">${escapeHtml(submission.email)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: 700;">Submitted</td>
          <td style="padding: 8px 0;">${escapeHtml(submission.createdAt)}</td>
        </tr>
      </table>
      <div style="margin-top: 20px; border-radius: 16px; background: #e2e8f0; padding: 16px;">
        <p style="margin: 0 0 8px; font-weight: 700;">Message</p>
        <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(submission.message)}</p>
      </div>
    </div>
  `

  return { subject, text, html }
}

function buildDashboardPage(submissions) {
  const cards = submissions.length
    ? submissions
        .map(
          (submission) => `
            <article class="card">
              <div class="meta-row">
                <span class="badge">${escapeHtml(submission.createdAt)}</span>
                <span class="badge alt">${escapeHtml(submission.id)}</span>
              </div>
              <h2>${escapeHtml(submission.name)}</h2>
              <p><strong>Email:</strong> <a href="mailto:${escapeHtml(submission.email)}">${escapeHtml(submission.email)}</a></p>
              <p class="message">${escapeHtml(submission.message)}</p>
            </article>
          `
        )
        .join("")
    : '<div class="empty">No submissions yet. Submit the contact form from the portfolio site and they will appear here.</div>'

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Portfolio Backend Viewer</title>
        <style>
          :root {
            color-scheme: dark;
            --bg: #020617;
            --panel: rgba(15, 23, 42, 0.86);
            --border: rgba(148, 163, 184, 0.18);
            --text: #e2e8f0;
            --muted: #94a3b8;
            --accent: #22d3ee;
            --accent-2: #8b5cf6;
          }

          * { box-sizing: border-box; }
          body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: radial-gradient(circle at top left, rgba(34, 211, 238, 0.15), transparent 28%), radial-gradient(circle at top right, rgba(139, 92, 246, 0.16), transparent 24%), var(--bg);
            color: var(--text);
          }

          .container {
            max-width: 1100px;
            margin: 0 auto;
            padding: 40px 20px 60px;
          }

          .hero {
            margin-bottom: 28px;
            padding: 28px;
            border: 1px solid var(--border);
            border-radius: 24px;
            background: var(--panel);
            backdrop-filter: blur(18px);
          }

          h1 {
            margin: 0 0 12px;
            font-size: clamp(2rem, 4vw, 3rem);
          }

          p {
            color: var(--muted);
            line-height: 1.7;
          }

          a { color: var(--accent); }

          .actions {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            margin-top: 18px;
          }

          .button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 12px 18px;
            border-radius: 999px;
            text-decoration: none;
            font-weight: 700;
            border: 1px solid var(--border);
            color: var(--text);
            background: rgba(255,255,255,0.04);
          }

          .button.primary {
            color: #020617;
            border: none;
            background: linear-gradient(90deg, var(--accent), var(--accent-2));
          }

          .grid {
            display: grid;
            gap: 18px;
          }

          .card, .empty {
            border: 1px solid var(--border);
            border-radius: 22px;
            background: var(--panel);
            backdrop-filter: blur(18px);
            padding: 22px;
          }

          .card h2 {
            margin: 12px 0 10px;
            font-size: 1.35rem;
          }

          .meta-row {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
          }

          .badge {
            display: inline-flex;
            padding: 8px 12px;
            border-radius: 999px;
            background: rgba(34, 211, 238, 0.12);
            color: #a5f3fc;
            font-size: 0.82rem;
          }

          .badge.alt {
            background: rgba(139, 92, 246, 0.12);
            color: #ddd6fe;
          }

          .message {
            margin-top: 14px;
            padding: 14px;
            border-radius: 16px;
            background: rgba(255,255,255,0.04);
            white-space: pre-wrap;
            color: var(--text);
          }
        </style>
      </head>
      <body>
        <main class="container">
          <section class="hero">
            <h1>Portfolio Backend Viewer</h1>
            <p>Your contact form submissions are stored in the backend and shown here. Open the portfolio on <strong>http://localhost:3000</strong>, submit the form, then refresh this page to see the new entry.</p>
            <div class="actions">
              <a class="button primary" href="http://localhost:3000" target="_blank" rel="noreferrer">Open Portfolio</a>
              <a class="button" href="/api/submissions" target="_blank" rel="noreferrer">View JSON API</a>
            </div>
          </section>
          <section class="grid">
            ${cards}
          </section>
        </main>
      </body>
    </html>
  `
}

async function sendContactEmail(submission) {
  if (!hasMailConfig()) {
    return {
      sent: false,
      reason: "not-configured"
    }
  }

  try {
    const transporter = createTransporter()
    const emailContent = buildEmailContent(submission)

    await transporter.sendMail({
      from: `"${contactSenderName}" <${smtpUser}>`,
      to: contactReceiver,
      replyTo: submission.email,
      subject: emailContent.subject,
      text: emailContent.text,
      html: emailContent.html
    })

    return {
      sent: true
    }
  } catch (error) {
    console.error("Email delivery failed:", error)

    return {
      sent: false,
      reason: "failed"
    }
  }
}

app.get("/", async (_request, response, next) => {
  try {
    const submissions = await readSubmissions()
    response.type("html").send(buildDashboardPage(submissions))
  } catch (error) {
    next(error)
  }
})

app.get("/api/health", (_request, response) => {
  response.json({
    status: "ok",
    emailConfigured: hasMailConfig()
  })
})

app.get("/api/submissions", async (_request, response, next) => {
  try {
    const submissions = await readSubmissions()
    response.json(submissions)
  } catch (error) {
    next(error)
  }
})

app.post("/api/contact", async (request, response, next) => {
  try {
    const name = request.body?.name?.trim()
    const email = request.body?.email?.trim()
    const message = request.body?.message?.trim()

    if (!name || !email || !message) {
      return response.status(400).json({
        message: "Please provide your name, email, and message."
      })
    }

    if (!isValidEmail(email)) {
      return response.status(400).json({
        message: "Please enter a valid email address."
      })
    }

    const submission = {
      id: randomUUID(),
      name,
      email,
      message,
      createdAt: new Date().toISOString()
    }

    const submissions = await readSubmissions()
    submissions.unshift(submission)
    await writeSubmissions(submissions)

    console.log(`[contact] ${submission.createdAt} | ${name} <${email}>`)

    const emailResult = await sendContactEmail(submission)

    if (emailResult.sent) {
      return response.status(201).json({
        message: "Thank you for your message."
      })
    }

    if (emailResult.reason === "not-configured") {
      return response.status(201).json({
        message: "Thank you for your message."
      })
    }

    return response.status(201).json({
      message: "Thank you for your message."
    })
  } catch (error) {
    return next(error)
  }
})

app.use((error, _request, response, _next) => {
  console.error("Unexpected server error:", error)

  response.status(500).json({
    message: "Something went wrong while saving your message."
  })
})

ensureStorage()
  .then(() => {
    app.listen(port, () => {
      console.log(`Contact API running on http://localhost:${port}`)
      console.log(`Email delivery configured: ${hasMailConfig() ? "yes" : "no"}`)
    })
  })
  .catch((error) => {
    console.error("Failed to start contact API:", error)
    process.exit(1)
  })


