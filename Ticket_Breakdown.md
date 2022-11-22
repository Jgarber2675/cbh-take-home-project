# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
It is unclear to me if Agents can work shifts at multiple facilities. I would seek clarification on this, but for the purpose of this assessment I would assume that agents can work at multiple facilities. If that is the case, then I would procede as follows:
1) The shifts tables needs an additional column added to allow for the facility specific custom ID - We attach this information to each shift as each agent will have a custom ID per facility. This should take 0.5-1 hours.
2) the function getShiftsByFacility will need to be changed to ask for meta deta related to the agents custom ID off the shift table. Depending on the configuration of the function this may already be done, but it might take another hour.

From here I would want more clarification on what functionality each facility needs, but assuming each facility wants to be able to generate the report with only the shifts related to a specific agent using their custom ID id make these changes:

3) Another function getShiftsByFacilityByID need to be created, which would limit shift results to those who match the agents custom ID. Most of the difficulty with this would be in understanding the exsisting database structure. This would take 1-3 hours.
4) The function generateReport would be changed to use custom ID in place of the database ID. That information is already found in the shift database, so it should just be a matter of changing what gets displayed. This might take another 1-2 hours.
5) The function generateReport would also need to call our new function getShiftsByFacilityId when a custom id is passed in. This requires checking to see if a parameter is defined and changing the function that is called on the result. At most this would take 1 hour.

This would be enough to achieve the functionality outlined in the Ticket.