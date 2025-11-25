export function clientHtml({
  fullName,
  email,
  phone,
  service,
  message,
}: {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}) {
  return /* html */ `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>New Portfolio Enquiry!</title>
  <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,700" rel="stylesheet" />
  <style>
    /* inlined styles trimmed for brevity … */
  </style>
</head>
<body>
  <div class="main">
    <h1>✨ New Portfolio Enquiry! ✨</h1>
    <h3>Enquiry Details</h3>
    <table>
      <tr><td>Client Name:</td><td>${fullName}</td></tr>
      <tr><td>Client Email:</td><td><a href="mailto:${email}">${email}</a></td></tr>
      <tr><td>Client Phone:</td><td><a href="tel:${phone}">${phone}</a></td></tr>
      <tr><td>Client Name:</td><td>${service}</td></tr>
      <tr><td>Client Name:</td><td>${message}</td></tr>

    </table>
  
    <p style="text-align:right;">Warm Regards,<br>Pooja</p>
  </div>
</body>
</html>`;
}

export function userHtml(fullName: string) {
  return /* html */ `
<!DOCTYPE html>
<html><body>
  <p>Hi ${fullName},</p>
  <p>Thanks for reaching out — we’ll reply soon.</p>
  <p>Cheers,<br/>Pooja</p>
</body></html>`;
}
