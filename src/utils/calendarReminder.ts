export function generateAuditICalFile(projectName: string, clientOrTeam?: string): void {
  const sanitize = (str: string) => str.replace(/\n/g, ' ').replace(/,/g, '\\,');

  const title = `ارزیابی دوره‌ای UX و دسترسی‌پذیری (${projectName})`;
  const description = `زمان ارزیابی ۳ ماهه استانداردهای تجربه کاربری، دسترسی‌پذیری WCAG و کیفیت رابط کاربری برای پروژه ${projectName}${
    clientOrTeam ? ` (${clientOrTeam})` : ''
  }.\n\nمرجع چک‌لیست: https://checklist.nounproject.ir`;

  const now = new Date();
  
  // Event 1: 3 months from now
  const date1 = new Date(now);
  date1.setMonth(date1.getMonth() + 3);

  // Event 2: 6 months from now
  const date2 = new Date(now);
  date2.setMonth(date2.getMonth() + 6);

  const formatDate = (date: Date) => {
    return date.toISOString().replace(/-|:|\.\d+/g, '');
  };

  const dtStart1 = formatDate(date1);
  const dtEnd1 = formatDate(new Date(date1.getTime() + 3600000)); // 1 hour duration

  const dtStart2 = formatDate(date2);
  const dtEnd2 = formatDate(new Date(date2.getTime() + 3600000));

  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//UX Checklist Reference//FA
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
SUMMARY:${sanitize(title)} - نوبت اول
DESCRIPTION:${sanitize(description)}
DTSTART:${dtStart1}
DTEND:${dtEnd1}
STATUS:CONFIRMED
BEGIN:VALARM
TRIGGER:-PT1D
ACTION:DISPLAY
DESCRIPTION:یادآوری ارزیابی UX پروژه
END:VALARM
END:VEVENT
BEGIN:VEVENT
SUMMARY:${sanitize(title)} - نوبت دوم
DESCRIPTION:${sanitize(description)}
DTSTART:${dtStart2}
DTEND:${dtEnd2}
STATUS:CONFIRMED
BEGIN:VALARM
TRIGGER:-PT1D
ACTION:DISPLAY
DESCRIPTION:یادآوری ارزیابی UX پروژه
END:VALARM
END:VEVENT
END:VCALENDAR`;

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `ux-audit-reminder-${projectName.toLowerCase().replace(/\s+/g, '-')}.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
