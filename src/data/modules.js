export const modules = [
  {
    id: 'campus',
    name: 'Campus',
    desc: 'Locations, hours, directions',
    greeting: 'Hi! I\'m here to help with <strong>Campus</strong> queries. I can assist you with campus locations across Abu Dhabi, Dubai, Ras Al Khaimah, and Fujairah — including opening hours, directions, bus routes, and parking.',
    suggestions: ['Campus locations', 'Opening hours', 'Bus routes to campus', 'Parking availability'],
    responses: {
      'campus locations': 'We have campuses in <strong>Abu Dhabi</strong> (main campus), <strong>Dubai</strong>, <strong>Ras Al Khaimah</strong>, and <strong>Fujairah</strong>. Each campus is fully equipped with modern facilities. Would you like directions to a specific campus?',
      'opening hours': 'Most campuses are open <strong>Sunday to Thursday, 7:30 AM – 9:00 PM</strong>. On Saturdays, selected campuses open <strong>9:00 AM – 5:00 PM</strong>. Public holiday schedules may vary.',
      'bus routes': 'The university operates shuttle buses connecting major city hubs to campus. Routes and timetables are available on the student portal under <strong>Transportation Services</strong>.',
      'parking': 'Parking is available at all campuses. Abu Dhabi and Dubai campuses have dedicated student parking zones. A valid student ID is required. Parking is free of charge for registered students.',
      'directions': 'You can find detailed directions to all campuses on the university website under <strong>Campus Maps</strong>. GPS coordinates and Google Maps links are also available.',
    },
  },
  {
    id: 'facilities',
    name: 'Facilities',
    desc: 'Libraries, labs, sports, dining',
    greeting: 'Welcome! I can help you with <strong>Facilities</strong> at the university — libraries, computer labs, cafeterias, sports centers, and accessibility services. What would you like to know?',
    suggestions: ['Library hours', 'Computer rooms', 'Cafeteria options', 'Sports facilities'],
    responses: {
      'library': 'The main library is open <strong>Sunday–Thursday, 8:00 AM – 10:00 PM</strong> and <strong>Saturday, 9:00 AM – 5:00 PM</strong>. It provides access to over 50,000 physical and digital resources, quiet study zones, and group rooms.',
      'computer': 'Computer labs are available at all campuses with licensed software for academic use. Labs are open during building hours and can be booked in advance via the student portal.',
      'cafeteria': 'Each campus has at least one cafeteria offering halal-certified meals, international cuisine, and grab-and-go options. There are also vending machines and coffee stations throughout campus.',
      'sports': 'Sports facilities include gyms, indoor courts, and outdoor pitches. Membership is included in student fees. Check the sports center schedule on the portal for class timings.',
      'accessibility': 'The university provides wheelchair access, hearing loops, reserved parking, and support services for students with disabilities. Contact the Student Services office for a full accessibility assessment.',
    },
  },
  {
    id: 'academic',
    name: 'Academic Programs',
    desc: 'Programs, courses, prerequisites',
    greeting: 'Hello! I can assist with <strong>Academic Programs</strong> — available programs per campus, course offerings, credit requirements, and eligibility. What are you looking for?',
    suggestions: ['Programs offered', 'Course catalog', 'Program duration', 'Prerequisites'],
    responses: {
      'programs': 'The university offers undergraduate and postgraduate programs in <strong>Engineering, Business, IT, Health Sciences, and Education</strong>. Program availability may vary by campus. Visit the academic section for the full catalog.',
      'courses': 'Course offerings are updated each semester. The full course catalog is available on the student portal. You can filter by department, level, and campus.',
      'duration': 'Most bachelor\'s programs are <strong>4 years (120–130 credit hours)</strong>. Master\'s programs are typically <strong>1.5–2 years</strong>. Part-time options are available for working professionals.',
      'prerequisites': 'Each course has specific prerequisites listed in the course description on the portal. Please consult your academic advisor to ensure you meet the requirements before registering.',
      'credit': 'Credit requirements vary by program. Generally, a bachelor\'s degree requires 120–130 credits. Your academic advisor can provide a personalized credit plan.',
    },
  },
  {
    id: 'admissions',
    name: 'Admissions',
    desc: 'Requirements, deadlines, scholarships',
    greeting: 'Welcome to <strong>Admissions</strong>! I can help you with admission requirements, application deadlines, scholarship information, and orientation. How can I assist you?',
    suggestions: ['Admission requirements', 'Application deadlines', 'Scholarships available', 'Orientation dates'],
    responses: {
      'requirements': 'General requirements include a <strong>high school certificate</strong> (for undergrad) or a <strong>bachelor\'s degree</strong> (for postgrad), English proficiency (IELTS/TOEFL), and a completed application form.',
      'deadlines': 'Applications for the <strong>Fall semester</strong> close in June, and for the <strong>Spring semester</strong> in November. It\'s recommended to apply at least 6 weeks before the deadline.',
      'scholarships': 'The university offers merit-based and need-based scholarships. Merit scholarships are awarded based on academic excellence. Applications open alongside the main admissions process.',
      'orientation': 'New student orientation is held at the start of each semester, typically one week before classes begin. It covers academic expectations, campus tours, and student services registration.',
    },
  },
  {
    id: 'registration',
    name: 'Registration',
    desc: 'Course registration, timetables',
    greeting: 'I\'m here to help with <strong>Registration</strong> — course registration, timetables, transfer credits, and exemptions. What do you need assistance with?',
    suggestions: ['How to register', 'View timetable', 'Transfer credits', 'Add/drop deadlines'],
    responses: {
      'register': 'Course registration is done through the <strong>Student Portal</strong> during the designated registration window. Log in, navigate to "Registration", select your courses, and confirm.',
      'timetable': 'Timetables are published on the portal before the registration window opens. You can view, export, and print your confirmed schedule from the <strong>My Timetable</strong> section.',
      'transfer': 'Transfer credits from recognized institutions may be accepted upon evaluation by the Registrar\'s Office. Submit your official transcripts and course descriptions for review.',
      'add drop': 'The add/drop period is during the <strong>first two weeks of each semester</strong>. After this period, withdrawal may result in a "W" grade. Check the academic calendar for exact dates.',
    },
  },
  {
    id: 'student-services',
    name: 'Student Services',
    desc: 'Support, careers, wellness, IT',
    greeting: 'Hello! <strong>Student Services</strong> is here to support you. I can help with academic support, career guidance, counseling, student clubs, IT support, and housing. What do you need?',
    suggestions: ['Tutoring services', 'Career guidance', 'Counseling', 'IT support'],
    responses: {
      'tutoring': 'Free tutoring sessions and academic workshops are available through the Learning Support Center. You can book 1-on-1 sessions or join group study sessions via the student portal.',
      'career': 'The Career Development Center offers CV reviews, interview preparation, internship placements, and employer networking events. Visit them at the Student Services building or book online.',
      'counseling': 'Confidential counseling and wellness services are available to all students. You can schedule an appointment with a counselor via the student portal or walk in during open hours.',
      'clubs': 'There are 40+ student clubs and societies covering arts, culture, sports, and academics. Join via the Student Affairs office or the clubs section on the portal.',
      'it support': 'IT support is available via the Help Desk at each campus. For email, LMS, or portal access issues, submit a ticket at helpdesk.university.ac.ae or call the IT hotline.',
      'housing': 'On-campus housing is available on a limited basis. Apply through the Accommodation Office. Off-campus housing guides and support are also available from Student Services.',
    },
  },
  {
    id: 'financial',
    name: 'Financial',
    desc: 'Fees, payments, scholarships',
    greeting: 'Welcome to <strong>Financial Services</strong>. I can help with tuition fees, payment methods, scholarships, financial aid, and refund policies. How can I assist?',
    suggestions: ['Tuition fees', 'Payment methods', 'Financial aid', 'Refund policy'],
    responses: {
      'tuition': 'Tuition fees vary by program and campus. For a detailed fee schedule per program, visit the Finance section on the university website or contact the Finance Office directly.',
      'payment': 'Tuition fees can be paid online through the student portal, by bank transfer, or in person at the Finance Office. Payment plans may be available — contact finance for details.',
      'financial aid': 'Financial aid options include government grants, university scholarships, and external funding. Contact the Financial Aid Office to discuss your eligibility and application process.',
      'refund': 'Refund policies depend on the withdrawal date. Full refunds are typically issued within the first week of the semester, with partial refunds available in weeks 2–3. No refunds after week 4.',
    },
  },
  {
    id: 'policies',
    name: 'Policies',
    desc: 'Regulations, conduct, safety',
    greeting: 'I can help you with <strong>University Policies</strong> — academic regulations, grading, attendance, exam policies, code of conduct, and safety procedures. What would you like to know?',
    suggestions: ['Grading policy', 'Attendance rules', 'Exam policies', 'Code of conduct'],
    responses: {
      'grading': 'The university uses a letter grade system (A–F) with a corresponding GPA scale of 0–4.0. Grades are posted on the portal within 2 weeks of final exams. Grade appeals must be submitted within 5 working days.',
      'attendance': 'Students must maintain a minimum <strong>80% attendance rate</strong> per course. Falling below 75% may result in a "DN" (Denied) grade, barring you from sitting the final exam.',
      'exam': 'Exams are held at the end of each semester. The schedule is published 4 weeks in advance. Medical excuses for missed exams must be submitted within 3 days.',
      'conduct': 'Students are expected to maintain professional and respectful conduct on and off campus. Violations including plagiarism, harassment, or misconduct are handled by the Disciplinary Committee.',
      'safety': 'The university has a 24/7 security team. Emergency procedures are posted throughout campus. In case of emergency, call campus security or the UAE emergency line (999).',
    },
  },
  {
    id: 'events',
    name: 'Events',
    desc: 'Calendar, workshops, activities',
    greeting: 'Hello! I can help you explore <strong>University Events</strong> — upcoming campus events, workshops, guest lectures, sports activities, and cultural programs. What are you looking for?',
    suggestions: ['Upcoming events', 'Workshops & seminars', 'Sports activities', 'Cultural events'],
    responses: {
      'upcoming': 'The full events calendar is available on the university website and student portal. Events are updated weekly. You can filter by campus, category, or date.',
      'workshops': 'Regular workshops and seminars are held on topics including research skills, career readiness, technology, and wellness. Check the Events section on the portal to register.',
      'sports': 'Intramural sports leagues, tournaments, and fitness classes run throughout the semester. Check with the Sports Center or the Events calendar for schedules.',
      'cultural': 'Cultural activities including art exhibitions, national day celebrations, and international student events are organized by Student Affairs. Follow the official university social media for updates.',
    },
  },
  {
    id: 'faq',
    name: 'FAQ & General Info',
    desc: 'FAQs, contacts, news',
    greeting: 'Welcome to <strong>FAQ & General Info</strong>. I can answer frequently asked questions, provide university contact information, share news, and inform you about public holidays. How can I help?',
    suggestions: ['Contact information', 'University news', 'Public holidays', 'Student portal help'],
    responses: {
      'contact': 'Main Switchboard: +971-2-XXX-XXXX | Email: info@university.ac.ae | Student Services: studentservices@university.ac.ae | Admissions: admissions@university.ac.ae',
      'news': 'University news and announcements are published on the official website homepage and the student portal news feed. Subscribe to the newsletter for regular updates.',
      'holidays': 'UAE public holidays are observed by the university. The academic calendar, including holiday breaks and semester dates, is available on the website under <strong>Academic Calendar</strong>.',
      'portal': 'The student portal is accessible at portal.university.ac.ae. Use your student ID and registered email as login credentials. For access issues, contact IT Support via the Help Desk.',
    },
  },
];

export function getBotResponse(mod, query) {
  const q = query.toLowerCase();
  for (const [key, val] of Object.entries(mod.responses)) {
    if (q.includes(key)) return val;
  }
  return `Thank you for your question about <strong>${mod.name}</strong>. For the most accurate and up-to-date information, please visit the university portal or contact the relevant department directly. Is there anything else I can help you with?`;
}
