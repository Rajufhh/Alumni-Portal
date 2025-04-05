### Alumni Portal Project Specification

#### Project Overview
**Purpose**: This web application connects current college students with alumni, fostering mentorship, sharing nostalgia, and building a strong college-specific community. It provides a platform where students can access career guidance and job opportunities, while alumni can contribute their experiences, mentor students, and reconnect with their alma mater.

**Target Users**:  
- **Students**: Individuals currently enrolled in the college, seeking mentorship, career insights, job opportunities, and a connection to their institution’s history.  
- **Alumni**: Graduates of the college who want to share their professional journeys, mentor students, stay engaged with the college community, and relive past memories.

---

### PAGE 1: Landing Page (Pre-Login)
**Purpose**: The initial page users encounter before logging in, designed to attract new users by highlighting the portal’s value, showcasing community statistics, and offering quick access to login or sign-up.

#### Specifications:
1. **Header Section**:  
   - **Logo Placeholder**: Text labeled “Alumni Portal” displayed at the top-left corner. Clicking this text refreshes the Landing Page to ensure users can return to the starting point.  
   - **Navigation Links**: Positioned at the top-right corner, two buttons are provided:  
     - “Login” button: Text “Login” inside a bordered button. Clicking it directs users to the Login Page.  
     - “Sign Up” button: Text “Sign Up” inside a filled button, placed immediately to the right of the “Login” button. Clicking it directs users to the Sign Up Page.  

2. **Statistics Section**:  
   - **Content**: Three separate boxes displayed horizontally across the page, each showing a key statistic about the portal’s usage.  
     - First Box: Text reading “10,000+ Alumni Connected” with “10,000+” emphasized and “Alumni Connected” below it.  
     - Second Box: Text reading “500+ Job Postings” with “500+” emphasized and “Job Postings” below it.  
     - Third Box: Text reading “1,000+ Mentorship Matches” with “1,000+” emphasized and “Mentorship Matches” below it.  
   - **Details**: Each box is spaced evenly apart and centered on the page. The numbers are static mock data for demonstration purposes, not dynamically fetched, to show potential scale.

3. **Testimonials Section**:  
   - **Content**: Three user quotes displayed in a horizontal row below the statistics:  
     - Quote 1: “This portal helped me land my dream job at Google!” followed by “— Priya S., Alumni ‘19” below it.  
     - Quote 2: “I found an amazing mentor who guided me through college applications.” followed by “— Liam O., Student ‘25” below it.  
     - Quote 3: “I reconnected with old friends and shared my story—love this platform!” followed by “— Sofia R., Alumni ‘15” below it.  
   - **Details**: Each quote is enclosed in a bordered box, with the quote italicized and attribution below it, accompanied by a circular avatar showing the user’s initials (e.g., “PS” for Priya S.). The boxes are spaced apart, centered on the page, and scroll horizontally if the screen width is too small to display all three at once.

4. **Features Section**:  
   - **Content**: Four features listed below the testimonials, each in its own box:  
     - **Alumni Directory**: Accompanied by a magnifying glass icon, followed by text “Search and connect with alumni by batch, skills, or location.”  
     - **Job Postings Board**: Accompanied by a briefcase icon, followed by text “Browse or post job opportunities from alumni.”  
     - **Events & Reunions Info**: Accompanied by a calendar icon, followed by text “Stay updated on meetups and college events.”  
     - **Mentorship Guidance**: Accompanied by a handshake icon, followed by text “Get paired with alumni mentors for career growth.”  
   - **Details**: Each box contains an icon left-aligned, with text to the right of the icon. The boxes are arranged in two rows of two (2x2 grid) on larger screens and stack vertically on smaller screens.

5. **Footer Section**:  
   - **Content**: A single line of text at the bottom of the page reading “© 2025 Alumni Portal | Contact Us: support@alumniportal.com | Privacy Policy”.  
   - **Details**: Centered horizontally, fixed to the bottom of the page, with “Contact Us” underlined and clickable as an email link that opens the user’s email client. “Privacy Policy” is a placeholder text link (not yet functional).

#### Minor Details:
- **Spacing**: Vertical spacing between sections (header, stats, testimonials, features, footer).  
- **Responsive Behavior**: On narrow screens, stats stack vertically (one per row), testimonials scroll horizontally, and features stack into a single column.  
- **Accessibility**: Alt text for icons (e.g., “Magnifying glass for directory”), keyboard navigation for buttons (tab order: Login → Sign Up), text contrast sufficient for readability.

---

### PAGE 2: Sign Up Page
**Purpose**: Enables new users to create an account by providing personal and college-related information, distinguishing between student and alumni roles.

#### Specifications:
1. **Header Section**:  
   - **Logo Placeholder**: Text “Alumni Portal” at the top-left corner, clickable to return to the Landing Page.  
   - **Page Title**: Text “Create Your Account” centered above the form, with padding below to separate it from the form fields.

2. **Sign Up Form**:  
   - **First Name Field**: A text input box with a placeholder “First Name” (e.g., “Priya”). This field is required, and submitting without it triggers an error message “First name is required” below the input.  
   - **Last Name Field**: A text input box with a placeholder “Last Name” (e.g., “Sharma”). This field is required, with the same error message “Last name is required” if left blank.  
   - **Email Field**: A text input box with a placeholder “Enter your email” (e.g., “priya@gmail.com”). This field is required, validated to ensure it’s a valid email format (e.g., contains “@” and “.”), and triggers an error “Invalid email format” if incorrect.  
   - **Password Field**: A password input box with a placeholder “Enter password”. This field is required, must be at least 8 characters, and includes a toggle button (eye icon) on the right side to show/hide the password. An error “Password must be at least 8 characters” appears if too short.  
   - **Role Field**: Two radio buttons labeled “Student” and “Alumni”, displayed horizontally with spacing between them. “Student” is selected by default, and the user must choose one. This field is required, though enforced by the default selection.  
   - **Date of Birth (DOB) Field**: A text input box with a placeholder “Enter your DOB (YYYY-MM-DD)” (e.g., “1999-05-15”). This field is required, validated for correct date format, and triggers an error “Invalid date format” if incorrect. A calendar picker option is included, triggered by clicking inside the field, allowing users to select a date visually.  
   - **Batch Field**: A dropdown menu with a placeholder “Select your batch” (e.g., “2023”). Options range from 1980 to 2030, scrollable, and this field is required with an error “Batch is required” if not selected.  
   - **LinkedIn Field**: A text input box with a placeholder “Enter your LinkedIn URL” (e.g., “linkedin.com/in/priya”). This field is required, validated to ensure it’s a valid URL starting with “linkedin.com”, and triggers an error “Invalid LinkedIn URL” if incorrect.  
   - **GitHub Field**: A text input box with a placeholder “Enter your GitHub URL” (e.g., “github.com/priya”). This field is required, validated to ensure it’s a valid URL starting with “github.com”, and triggers an error “Invalid GitHub URL” if incorrect.

3. **Submit Button**:  
   - **Appearance**: A button with text “Sign Up”, centered below the form fields with padding above it.  
   - **Action**: Clicking submits the form data to the backend API (POST /signup endpoint), which includes all fields: `firstName`, `lastName`, `email`, `password`, `role`, `dob`, `batch`, `linkedin`, `github`. On success, the API returns a JWT (JSON Web Token), stores it in a browser cookie, and redirects the user to the Home Page. On failure (e.g., email already registered), an alert box appears with the error message (e.g., “Email already in use”).

4. **Footer Section**:  
   - **Content**: Text “Already have an account? Login” centered below the submit button. The word “Login” is underlined and clickable as a hyperlink directing to the Login Page.  
   - **Details**: Padding above the text to separate it from the submit button.

#### Minor Details:
- **Layout**: All form fields are stacked vertically, centered on the page, with spacing between each field.  
- **Validation**: Real-time checks as users type—a checkmark appears next to valid fields, an “X” next to invalid ones.  
- **Error Handling**: If the API returns an error (e.g., “Email taken”), a pop-up alert box appears with the message and an “OK” button to dismiss it.  
- **Responsive Behavior**: On narrow screens, fields adjust to fit the screen width, maintaining spacing.  
- **Accessibility**: Each input has a text label above it (e.g., “First Name”), tab order follows field sequence, and error messages are screen-reader compatible.

---

### PAGE 3: Login Page
**Purpose**: Provides a secure entry point for registered users to access their accounts using their credentials.

#### Specifications:
1. **Header Section**:  
   - **Logo Placeholder**: Text “Alumni Portal” at the top-left corner, clickable to return to the Landing Page.  
   - **Page Title**: Text “Welcome Back” centered above the form, with padding below to separate it from the form fields.

2. **Login Form**:  
   - **Email Field**: A text input box with a placeholder “Enter your email” (e.g., “priya@gmail.com”). This field is required, and submitting without it triggers an error message “Email is required” below the input.  
   - **Password Field**: A password input box with a placeholder “Enter password”. This field is required, includes a toggle button (eye icon) on the right side to show/hide the password, and triggers an error “Password is required” if left blank.

3. **Submit Button**:  
   - **Appearance**: A button with text “Login”, centered below the form fields with padding above it.  
   - **Action**: Clicking submits the form data to the backend API (POST /login endpoint), which includes `email` and `password`. On success, the API returns a JWT, stores it in a browser cookie, and redirects the user to the Home Page. On failure (e.g., wrong password), an alert box appears with the error message (e.g., “Invalid credentials”).

4. **Footer Section**:  
   - **Content**: Text “Don’t have an account? Sign Up” centered below the submit button. The word “Sign Up” is underlined and clickable as a hyperlink directing to the Sign Up Page.  
   - **Details**: Padding above the text to separate it from the submit button.

#### Minor Details:
- **Layout**: Form fields are stacked vertically, centered on the page, with spacing between them.  
- **Forgot Password**: Small text “Forgot Password?” below the password field, underlined, clickable but not yet functional (placeholder for future reset feature).  
- **Error Handling**: If the API returns “Invalid credentials,” a pop-up alert box appears with the message and an “OK” button to dismiss it.  
- **Responsive Behavior**: On narrow screens, fields adjust to fit the screen width, maintaining spacing.  
- **Accessibility**: Labels above inputs (e.g., “Email”), tab order (email → password → login), error messages readable by screen readers.

---

### PAGE 4: Home Page (Post-Login)
**Purpose**: The main dashboard after login, welcoming users and providing immediate access to updates and key features in a unified layout suitable for both students and alumni.

#### Specifications:
1. **Header Section**:  
   - **Logo Placeholder**: Text “Alumni Portal” at the top-left corner, clickable to refresh the Home Page.  
   - **Navigation Links**: Positioned at the top-right corner, a horizontal list of text links:  
     - “Home” (bolded to indicate active page), clickable to refresh Home Page.  
     - “Directory”, clickable to Directory Page.  
     - “Messages”, clickable to Messages Page.  
     - “Events”, clickable to Events Page.  
     - “Job Board”, clickable to Job Board Page.  
     - Links are spaced apart, underlined on hover.  
   - **User Profile**: A circular avatar showing user initials (e.g., “PS” for Priya Sharma), positioned to the right of navigation links. Clicking it opens a dropdown menu with:  
     - “Profile”, links to Profile Page.  
     - “Settings”, placeholder link (not yet functional).  
     - “Logout”, clears JWT cookie and redirects to Landing Page.  
     - Dropdown appears below the avatar with an offset.  
   - **Notification Icon**: A bell icon to the right of the profile avatar, showing a circular badge with a number (e.g., “3” for unread notifications). Clicking it scrolls to the Management & Notifications section on this page.

2. **Welcome Banner**:  
   - **Content**: Text “Welcome back, [FirstName LastName]!” (e.g., “Welcome back, Priya Sharma!”), followed by a role-specific subtext:  
     - For students: “Student: Connect with alumni mentors”.  
     - For alumni: “Alumni: Share your journey and mentor”.  
   - **Details**: Displayed in a banner across the top of the content area, with padding on all sides and centered text. The user’s name is dynamically fetched from the `User` object stored in Redux state.

3. **Updates Section**:  
   - **Layout**: An area on the left side of the page, containing a vertical list of updates.  
   - **Content**:  
     - **Posts from Alumni**: The most recent Text Post displayed as a single line (e.g., “Try LeetCode for coding practice - Priya S.”), followed by a timestamp (e.g., “2 hours ago”) and a “See All” link that directs to the Text Posts Page.  
     - **Recent Job Posting**: The most recent job listed as “Title - Company” (e.g., “Software Intern - Google”), followed by a timestamp (e.g., “1 day ago”) and a “View Job” link that directs to the Job Board Page.  
     - **Event Announcements**: The next upcoming event listed as “Title - Date” (e.g., “Tech Panel - Apr 5”), followed by a timestamp (e.g., “Posted 3 days ago”) and an “RSVP” button. Clicking “RSVP” toggles between “Going” and “Not Going” states, updating the backend via API (PATCH /events/:id/rsvp).  
   - **Details**: Each update is in its own box with padding inside and spacing between boxes. Only the top 3 updates are shown; if more exist, a “Load More” link appears at the bottom to fetch additional items via API.

4. **Dashboard Section**:  
   - **Layout**: An area on the right side of the page, containing a vertical list of actionable buttons and features.  
   - **Content**:  
     - **Edit Profile**: A button with text “Edit Profile”, followed by smaller text “Update your info”. Clicking directs to the Profile Page.  
     - **Post a Job**: A button with text “Post a Job”, followed by smaller text “Share opportunities”. Clicking opens a modal window with fields: “Title” (text input), “Company” (text input), “Description” (textarea), and a “Submit” button. Submits to API (POST /jobs), visible only to alumni (hidden for students via role check).  
     - **RSVP to Events**: A button with text “RSVP to Events”, followed by smaller text “Join upcoming meetups”. Clicking directs to the Events Page.  
     - **Alumni Directory**: A button with text “Alumni Directory”, followed by smaller text “Search and connect”. Clicking directs to the Directory Page.  
     - **Alumni Meetup**: A button with text “Alumni Meetup”, followed by smaller text “Plan or join reunions”. Clicking directs to the Events Page.  
     - **Chatbox**: A button with text “Chatbox”, followed by smaller text “Message your network”. Clicking opens an overlay showing the Messages Page content inline.  
     - **Management & Notifications**: A button with text “Notifications”, followed by smaller text “Manage your updates”. Clicking expands a scrollable list below the button showing recent notifications (e.g., “New message from Sofia - 1h ago”), fetched via Socket.IO in real-time with a “Mark as Read” link per item.  
   - **Details**: Each button and text pair is in a box with padding inside and spacing between boxes.

5. **Footer Section**:  
   - **Content**: Same as Landing Page: “© 2025 Alumni Portal | Contact Us: support@alumniportal.com | Privacy Policy”, centered at the bottom.

#### Minor Details:
- **Layout**: Updates section on the left, Dashboard on the right, with a gap between them. On narrow screens, sections stack vertically (Updates above Dashboard).  
- **Dynamic Data**: Fetched via React Query—`User.connections` for stats, latest `TextPost`, `Job`, `Event` from MongoDB collections.  
- **Responsive Behavior**: On mobile, buttons adjust to screen width, text below buttons wraps if needed.  
- **Accessibility**: Buttons have tooltips (e.g., “Go to profile” on hover), tab order follows layout (header → banner → updates → dashboard), notifications readable by screen readers.

---

### PAGE 5: Directory Page
**Purpose**: Enables users to search for and connect with other students or alumni based on various criteria.

#### Specifications:
1. **Header Section**: Same as Home Page, with “Directory” text bolded in the navigation links to indicate the active page.  
2. **Search Section**:  
   - **Search Bar**: A text input box with placeholder “Search by name” (e.g., “Priya”), positioned at the top of the content area.  
   - **Filters**: Below the search bar, three dropdowns:  
     - “Batch” (e.g., options “2023”, “2022”, “All”), placeholder “Select batch”.  
     - “Skills” (e.g., options “React”, “Python”, “All”), placeholder “Select skill”.  
     - “Location” (e.g., options “San Francisco”, “New York”, “All”), placeholder “Select location”.  
   - **Search Button**: A button with text “Search”, positioned to the right of the filters with spacing. Clicking triggers an API call (GET /users?query=name&batch=year&skill=skill&location=loc) to fetch matching users.  
3. **Results Section**:  
   - **Content**: A list of user profiles displayed below the search section, each in a box:  
     - **Name**: Full name (e.g., “Priya Sharma”), top-left.  
     - **Batch**: Graduation year (e.g., “2023”), below name.  
     - **Skills**: List of up to 3 skills (e.g., “React, Python”), below batch.  
     - **Location**: City (e.g., “San Francisco”), below skills.  
     - **Connect Button**: A button with text “Connect”, bottom-right. Clicking sends a connection request via API (POST /users/:id/connect), opening Messages with the user if accepted.  
   - **Details**: Boxes are arranged in a grid (3 per row on desktop), with spacing between them.  
4. **Footer Section**: Same as Landing Page.

#### Minor Details:
- **Pagination**: Below results, text “Showing 1-10 of 50” with “Next” and “Prev” links, each fetching the next/previous 10 users via API.  
- **Sorting**: Dropdown above results with options “Batch: Newest First”, “Batch: Oldest First”, “Name: A-Z”, default “Batch: Newest First”.  
- **No Results**: If no matches, text “No users found” centered in the results area.  
- **Responsive Behavior**: On mobile, grid becomes a single column, search bar adjusts to screen width.  
- **Accessibility**: Search bar has label “Search users”, filters have labels (e.g., “Filter by batch”), results readable by screen readers.

---

### PAGE 6: Career Stories Page
**Purpose**: Displays detailed career narratives written by alumni, allowing students to learn from their experiences and ask follow-up questions.

#### Specifications:
1. **Header Section**: Same as Home Page, with an additional navigation link “Career Stories” bolded to indicate the active page.  
2. **Stories List**:  
   - **Content**: A vertical list of story previews, each in a box:  
     - **Title**: Story title (e.g., “My FAANG Path”), top-left.  
     - **Snippet**: First 50 words of the story or AI-generated summary (e.g., “Prep paid off with system design focus”), below title.  
     - **Author**: Name and batch (e.g., “Priya S., 2019”), below snippet.  
     - **Date**: Posting date (e.g., “March 20, 2025”), below author.  
     - **Read More Link**: Text “Read More”, bottom-right, clicking directs to a full story view (future sub-page or modal).  
     - **Ask a Follow-Up Button**: For students only, a button with text “Ask a Follow-Up”, bottom-right next to “Read More”. Clicking opens Messages with the author, pre-filled with “Hi [Name], I read your story…”  
   - **Details**: Boxes have padding inside and spacing between them.  
3. **Create Story**:  
   - **Button**: For alumni only, a button with text “New Story”, top-right above the list. Clicking opens a modal window with:  
     - “Title” (text input), required.  
     - “Content” (textarea), required.  
     - “College Turning Point” (textarea), optional.  
     - “Submit” button, submits to API (POST /stories).  
   - **Details**: Modal has a “Close” button (X icon, top-right), with padding inside.  
4. **Footer Section**: Same as Landing Page.

#### Minor Details:
- **Limit**: Shows 5 stories initially, “Load More” link fetches next 5 via API.  
- **Full View**: Clicking “Read More” opens a modal with full text, author details, and “Close” button (future feature).  
- **Responsive Behavior**: On mobile, boxes stack vertically.  
- **Accessibility**: Titles have tooltips with snippets, buttons labeled (e.g., “Ask follow-up question”).

---

### PAGE 7: Text Posts Page
**Purpose**: Displays short, tagged posts from all users, offering quick insights, resources, or advice.

#### Specifications:
1. **Header Section**: Same as Home Page, with an additional navigation link “Text Posts” bolded to indicate the active page.  
2. **Posts List**:  
   - **Content**: A vertical list of posts, each in a box:  
     - **Post Text**: Up to 280 characters (e.g., “Try LeetCode for coding practice”), top-left.  
     - **Tag**: One of “Advice”, “Resource”, “Insight” (e.g., “Resource”), below text.  
     - **Author**: Name and role (e.g., “Priya S., Alumni”), below tag.  
     - **Date**: Posting date/time (e.g., “March 20, 2025, 3:00 PM”), below author.  
   - **Details**: Boxes have padding inside and spacing between them.  
3. **Create Post**:  
   - **Input**: A text input above the list, placeholder “Share a quick post (280 chars max)”.  
   - **Character Counter**: Text below input (e.g., “0/280”), updates as user types, indicates if over limit.  
   - **Tag Dropdown**: Next to input, options “Advice”, “Resource”, “Insight”, required.  
   - **Submit Button**: A button with text “Post”, right of dropdown. Submits to API (POST /posts), refreshes list on success.  
4. **Footer Section**: Same as Landing Page.

#### Minor Details:
- **Filters**: Dropdown above list with “All”, “Advice”, “Resource”, “Insight” options, filters posts on selection.  
- **Limit**: Shows 10 posts, “Load More” link fetches next 10.  
- **Responsive Behavior**: On mobile, boxes and input adjust to screen width.  
- **Accessibility**: Input labeled “New text post”, tags readable by screen readers.

---

### PAGE 8: Events Page
**Purpose**: Lists upcoming college events and reunions, allowing users to RSVP or create new events.

#### Specifications:
1. **Header Section**: Same as Home Page, with “Events” bolded in navigation.  
2. **Events List**:  
   - **Content**: A vertical list of events, each in a box:  
     - **Title**: Event name (e.g., “Tech Panel”), top-left.  
     - **Date**: Date and time (e.g., “April 5, 2025, 2:00 PM”), below title.  
     - **Location**: Venue (e.g., “Online” or “Campus Hall”), below date.  
     - **RSVP Button**: A button with text “RSVP”, bottom-right. Clicking toggles between “Going” and “Not Going” states, updates via API (PATCH /events/:id/rsvp).  
   - **Details**: Boxes have padding inside and spacing between them.  
3. **Create Event**:  
   - **Button**: For alumni only, a button with text “New Event”, top-right. Opens modal with:  
     - “Title” (text input), required.  
     - “Date” (date picker), required.  
     - “Location” (text input), required.  
     - “Details” (textarea), optional.  
     - “Submit” button, submits to API (POST /events).  
   - **Details**: Modal has “Close” button (X icon, top-right).  
4. **Footer Section**: Same as Landing Page.

#### Minor Details:
- **Limit**: Shows 5 events, “Load More” link fetches next 5.  
- **Responsive Behavior**: On mobile, boxes stack vertically.  
- **Accessibility**: RSVP button labeled “Respond to event”.

---

### PAGE 9: Job Board Page
**Purpose**: Displays job opportunities posted by alumni, allowing students to apply and alumni to contribute.

#### Specifications:
1. **Header Section**: Same as Home Page, with “Job Board” bolded.  
2. **Jobs List**:  
   - **Content**: A grid of jobs (3 per row), each in a box:  
     - **Title**: Job title (e.g., “Software Intern”), top-left.  
     - **Company**: Company name (e.g., “Google”), below title.  
     - **Location**: Job location (e.g., “Remote”), below company.  
     - **Apply Button**: A button with text “Apply”, bottom-right. Clicking opens email client (mailto:poster@email.com) with subject “Application for [Title]”.  
   - **Details**: Boxes have padding inside and spacing between them.  
3. **Create Job**:  
   - **Button**: For alumni only, a button with text “Post a Job”, top-right. Opens modal with:  
     - “Title” (text input), required.  
     - “Company” (text input), required.  
     - “Location” (text input), required.  
     - “Description” (textarea), required.  
     - “Submit” button, submits to API (POST /jobs).  
4. **Footer Section**: Same as Landing Page.

#### Minor Details:
- **Filters**: Dropdowns above list for “Type” (e.g., “Internship”), “Location”.  
- **Responsive Behavior**: Grid becomes single column on mobile.  
- **Accessibility**: Apply button labeled “Apply to job”.

---

### PAGE 10: Messages Page
**Purpose**: Facilitates real-time communication between users.

#### Specifications:
1. **Header Section**: Same as Home Page, with “Messages” bolded.  
2. **Chat Layout**:  
   - **Left Panel**: An area listing chats:  
     - Each chat as “Name - Last Message” (e.g., “Priya S. - Hi!”), with unread badge (e.g., “2”). Clicking selects the chat.  
   - **Right Panel**: An area showing:  
     - Chat history (e.g., “Priya: Hi!” left-aligned; “You: Hello!” right-aligned).  
     - Input box (placeholder “Type a message”), “Send” button.  
   - **Details**: Socket.IO updates history in real-time, messages stored in MongoDB.  
3. **Footer Section**: Same as Landing Page.

#### Minor Details:
- **Features**: Auto-suggestions (e.g., “Ask about their batch!” below input).  
- **Responsive Behavior**: Left panel hides on mobile, toggleable via button.  
- **Accessibility**: Chat history labeled “Conversation with [Name]”.

---

### PAGE 11: Profile Page
**Purpose**: Displays and allows editing of user information.

#### Specifications:
1. **Header Section**: Same as Home Page.  
2. **Profile Display**:  
   - **Content**: A box containing:  
     - Name (e.g., “Priya Sharma”).  
     - Batch (e.g., “2023”).  
     - Role (e.g., “Student”).  
     - DOB (e.g., “1999-05-15”).  
     - Email (e.g., “priya@gmail.com”).  
     - LinkedIn (e.g., “linkedin.com/in/priya”).  
     - GitHub (e.g., “github.com/priya”).  
     - Connections (e.g., “5 connections”).  
3. **Edit Button**: A button with text “Edit Profile”, top-right. Opens modal with all `User` fields editable (`firstName`, `lastName`, `email`, `password`, `role`, `dob`, `batch`, `linkedin`, `github`), “Save” button submits to API (PATCH /users/:id).  
4. **Footer Section**: Same as Landing Page.

#### Minor Details:
- **Responsive Behavior**: Box adjusts to screen width on mobile.  
- **Accessibility**: Fields labeled (e.g., “User email”).

---

### PAGE 12: Admin Panel Page
**Purpose**: Allows admin users to manage the portal’s users and content.

#### Specifications:
1. **Header Section**: Same as Home Page, with “Admin” added to nav, bolded.  
2. **Management Sections**:  
   - **Users**: List with columns “Name”, “Email”, “Role”, “Actions” (buttons “Ban” and “Edit”).  
   - **Content**: Tabs for Stories, Posts—each with “Title/Author” and “Delete” button.  
3. **Footer Section**: Same as Landing Page.

#### Minor Details:
- **Access**: Redirects non-admins to Home Page.  
- **Responsive Behavior**: List becomes vertical on mobile.  
- **Accessibility**: Actions labeled (e.g., “Ban user”).

---

### Tech Stack Recap
- **Frontend**: React (Vite), React Query.  
- **Backend**: Node.js, Express, TypeScript, MongoDB, Socket.IO.  
- **Auth**: JWT.