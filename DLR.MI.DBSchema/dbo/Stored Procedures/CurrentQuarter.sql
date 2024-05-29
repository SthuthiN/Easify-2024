
CREATE PROCEDURE [dbo].[CurrentQuarter]
AS
BEGIN
SELECT ID,Quarter+' '+cast(year AS VARCHAR(10)) AS Quarter  FROM Quarter WHERE ID <=(SELECT ID FROM Quarter 
WHERE Quarter=(CASE WHEN MONTH(getdate()) in(1,2,3)    THEN 'Q1'
                    WHEN MONTH(getdate()) in(4,5,6)    THEN 'Q2'
                    WHEN MONTH(getdate()) in(7,8,9)    THEN 'Q3'
                    WHEN MONTH(getdate()) in(10,11,12) THEN 'Q4' END) and Year=YEAR(getdate())) 
END