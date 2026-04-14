from apscheduler.schedulers.background import BackgroundScheduler
from src.scheduler.tasks import daily_habit_reminder, weekly_memory_digest, periodic_habit_reflection

scheduler = BackgroundScheduler()

def start_scheduler():
    scheduler.add_job(daily_habit_reminder, 'cron', hour=8, minute=0, id='daily_habit_reminder', replace_existing=True)
    scheduler.add_job(weekly_memory_digest, 'cron', day_of_week='sun', hour=10, minute=0, id='weekly_memory_digest', replace_existing=True)
    scheduler.add_job(periodic_habit_reflection, 'interval', days=3, id='periodic_habit_reflection', replace_existing=True)
    scheduler.start()

def stop_scheduler():
    scheduler.shutdown()
