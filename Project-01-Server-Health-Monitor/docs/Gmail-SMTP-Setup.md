# Gmail SMTP Configuration

This project uses Gmail SMTP through Postfix to send email alerts whenever the configured CPU, Memory or Disk threshold is exceeded.

---

## Prerequisites

- Gmail Account
- Two-Step Verification enabled
- Gmail App Password

---

## Step 1 - Enable Two-Step Verification

Open:

https://myaccount.google.com/security

Enable:

- Two-Step Verification

---

## Step 2 - Generate an App Password

Open:

Google Account

Security

App Passwords

Generate a new App Password for:

- Mail

Copy the generated 16-character password.

Example:

```
abcd efgh ijkl mnop
```

---

## Step 3 - Edit Postfix Configuration

Open:

```bash
sudo vim /etc/postfix/main.cf
```

Add the following configuration.

```ini
relayhost = [smtp.gmail.com]:587

smtp_use_tls = yes
smtp_tls_security_level = encrypt

smtp_sasl_auth_enable = yes
smtp_sasl_password_maps = hash:/etc/postfix/sasl_passwd
smtp_sasl_security_options = noanonymous

smtp_tls_CAfile = /etc/ssl/certs/ca-certificates.crt
```

---

## Step 4 - Create Gmail Credentials

Create the credentials file.

```bash
sudo vim /etc/postfix/sasl_passwd
```

Add:

```text
[smtp.gmail.com]:587 your-email@gmail.com:YOUR_APP_PASSWORD
```

Example:

```text
[smtp.gmail.com]:587 example@gmail.com:abcd efgh ijkl mnop
```

---

## Step 5 - Secure the Credentials

```bash
sudo chmod 600 /etc/postfix/sasl_passwd
```

Create the database.

```bash
sudo postmap /etc/postfix/sasl_passwd
```

Secure the generated database.

```bash
sudo chmod 600 /etc/postfix/sasl_passwd.db
```

---

## Step 6 - Restart Postfix

```bash
sudo systemctl restart postfix
```

---

## Step 7 - Verify Service Status

```bash
sudo systemctl status postfix
```

Expected output:

```
Active: active (running)
```

or

```
Active: active (exited)
```

---

## Step 8 - Send a Test Email

```bash
echo "SMTP Test" | mail -s "SMTP Test" your-email@gmail.com
```

---

## Step 9 - Check the Mail Queue

```bash
mailq
```

Expected output:

```
Mail queue is empty
```

---

## Step 10 - Check Mail Logs

```bash
sudo tail -30 /var/log/mail.log
```

A successful delivery looks similar to:

```
status=sent (250 2.0.0 OK)
```

---

The Server Health Monitor can now send email alerts using Gmail SMTP.
