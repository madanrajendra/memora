import pytest
from src.services.file_processor import FileProcessor
from src.services.calendar_service import CalendarService
from src.services.notification_service import NotificationService
from src.scheduler.tasks import daily_habit_reminder, weekly_memory_digest, periodic_habit_reflection

def test_file_processor():
    processor = FileProcessor()
    pdf_text = processor.extract_text("dummy.pdf", "pdf")
    assert "dummy.pdf" in pdf_text
    
    txt_text = processor.extract_text("notes.txt", "txt")
    assert "notes.txt" in txt_text
    
    with pytest.raises(ValueError):
        processor.extract_text("image.png", "png")

def test_calendar_service():
    calendar = CalendarService()
    event = calendar.add_event(1, "Doctor Appointment", "2026-04-01T10:00:00", "2026-04-01T11:00:00")
    assert event["status"] == "success"
    assert event["title"] == "Doctor Appointment"
    assert event["event_id"] is not None

def test_notification_service():
    notifier = NotificationService()
    assert notifier.send_email(1, "Test", "Test body") is True
    assert notifier.send_sms("+1234567890", "Test message") is True

def test_scheduled_tasks():
    assert daily_habit_reminder() == "Reminders sent"
    assert weekly_memory_digest() == "Digests generated"
    assert periodic_habit_reflection() == "Reflections completed"
