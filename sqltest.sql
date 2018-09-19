-- Get a list of databases
-- Delete rows from table 'TableName'
-- Select rows from a Table or View 'TableOrViewName' in schema 'SchemaName'
-- Insert rows into table 
-- Select rows from a Table or View 'TableOrViewName' in schema 'SchemaName'
-- SELECT * from sys.all_columns WHERE object_id = object_id('Event'
-- Add a new column 'NewColumnName' to table 'TableName' in schema 'SchemaName'
-- Select rows from a Table or View 'dbo.ms_Event' in schema 'Event'
/*
mssql getting started:
-----------------------------
1. Change language mode to SQL: Open a .sql file or press Ctrl+K M (Cmd+K M on Mac) and choose 'SQL'.
2. Connect to a database: Press F1 to show the command palette, type 'sqlcon' or 'sql' then click 'Connect'.
3. Use the T-SQL editor: Type T-SQL statements in the editor using T-SQL IntelliSense or type 'sql' to see a list of code snippets you can tweak & reuse.
4. Run T-SQL statements: Press F1 and type 'sqlex' or press Ctrl+Shift+e (Cmd+Shift+e on Mac) to execute all the T-SQL code in the editor.

Tip #1: Put GO on a line by itself to separate T-SQL batches.
Tip #2: Select some T-SQL text in the editor and press `Ctrl+Shift+e` (`Cmd+Shift+e` on Mac) to execute the selection
*/  
-- Add a new column 'pKey' to table 'ms_Tag' in schema 'Event.dbo'
-- ALTER TABLE Event.dbo.ms_Tag
--   ADD pKey /*new_column_name*/ int /*new_column_datatype*/ NULL /*new_column_nullability*/
-- GO
-- SELECT * from sys.all_columns WHERE object_id = object_id('Event')
-- GO
-- -- Select rows from a Table or View 'ms_tag' in schema 'Event.dbo'
-- SELECT * FROM Event.dbo.ms_tag
-- GO
-- Select rows from a Table or View 'ms_Event' in schema 'Event.dbo'
SELECT * FROM Event.dbo.ms_Event
-- GO
-- -- Select rows from a Table or View 'ms_Tag_Event' in schema 'Event.dbo'
-- SELECT * FROM Event.dbo.ms_Event_Tag	/* add search conditions here */
	/* add search conditions here */
	/* add search conditions here *