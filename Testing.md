Testing Notes
Normal Input Testing
Added contact: "Ada Lovelace", "08012345678", "ada@example.com" → Success
Displayed correctly
Edited name to "Ada L." → Updated successfully
Deleted contact → Removed successfully
Searched "Ada" → Correct result shown
Edge Case / Unusual Input Testing
Empty name → Alert: "Full Name is required"
Invalid email (e.g. "ada@") → Alert: "Please enter a valid email address"
Invalid phone (e.g. "123") → Alert: "Please enter a valid phone number"
Search with no results → "No contacts found" message appears
Bug Found & Fixed
Bug:
When editing a contact and then clicking "Cancel Edit", the form still kept the old data and the submit button still said "Update Contact".

Fix:
Created a resetForm() function that clears the form, resets the title, button text, and sets editingId back to null. Called this function on Cancel button click.

