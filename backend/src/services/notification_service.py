class NotificationService:
    def send_email(self, user_id: int, subject: str, body: str) -> bool:
        """
        Mock sending an email.
        """
        # In a real app, integrate SendGrid or AWS SES
        return True

    def send_sms(self, phone_number: str, message: str) -> bool:
        """
        Mock sending an SMS.
        """
        # In a real app, integrate Twilio
        return True
