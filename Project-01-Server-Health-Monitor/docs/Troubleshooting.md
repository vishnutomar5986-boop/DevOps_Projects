# Troubleshooting

## 1. Gmail Authentication Failed

Error:

```
535-5.7.8 Username and Password not accepted
```

Solution:

- Verify Two-Step Verification is enabled.
- Generate a new Gmail App Password.
- Update `/etc/postfix/sasl_passwd`.
- Run:

```bash
sudo postmap /etc/postfix/sasl_passwd
sudo systemctl restart postfix
```

---

## 2. Email Not Received

Check the mail queue.

```bash
mailq
```

If messages remain in the queue, inspect:

```bash
sudo tail -50 /var/log/mail.log
```

---

## 3. Duplicate relayhost Warnings

If you see:

```
overriding earlier entry: relayhost=
```

Search for duplicate entries.

```bash
grep relayhost /etc/postfix/main.cf
```

Remove the duplicate configuration and restart Postfix.

---

## 4. Verify SMTP Configuration

```bash
postconf | grep relayhost
```

Expected:

```
relayhost = [smtp.gmail.com]:587
```

---

## 5. Verify SMTP Authentication

```bash
postconf | grep smtp_sasl_auth_enable
```

Expected:

```
smtp_sasl_auth_enable = yes
```

---

## 6. Verify TLS

```bash
postconf | grep smtp_use_tls
```

Expected:

```
smtp_use_tls = yes
```

---

## 7. Verify Postfix Service

```bash
sudo systemctl status postfix
```

Expected:

```
Active: active
```

---

## 8. Send a Manual Test Email

```bash
echo "Testing Gmail SMTP" | mail -s "SMTP Test" your-email@gmail.com
```

---

## 9. Verify Mail Delivery

```bash
sudo tail -30 /var/log/mail.log
```

Successful delivery:

```
status=sent (250 2.0.0 OK)
```
