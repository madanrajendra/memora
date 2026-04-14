class CalendarService:
    def add_event(self, user_id: int, title: str, start_time: str, end_time: str) -> dict:
        """
        Mock Google Calendar API insertion.
        """
        return {
            "status": "success",
            "event_id": "mock_cal_event_123",
            "title": title,
            "start_time": start_time,
            "end_time": end_time
        }
