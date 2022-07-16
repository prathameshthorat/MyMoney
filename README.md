# MyMoney

# Project Description

 You work at ‘MyMoney’, a platform that lets investors track their consolidated portfolio value across equity, debt, and gold.

Portfolio rebalancing is an activity done to reduce the gains from one asset class and investing them in another, to ensure that the desired weight for each asset class doesn't deviate because of market gains/losses.

If we consider an investor who has invested in an equity fund, a debt/gilt fund, and gold, over the course of 5 years, with a desired weight of 60%, 30% and 10%, without rebalancing, the portfolio would look like this:

  -----------------------------------------------------------------------------------
 |                             |   Equity	   |   Debt	    |    Gold	   |    Total    |
  -----------------------------------------------------------------------------------
 |       Dec-05	               |  6,00,000	  |  3,00,000	 |   1,00,000 |	 10,00,000  |
  -----------------------------------------------------------------------------------
 |     Allocation              |	   60%      |  	  30%    |    	10%    |	   100%     |
  -----------------------------------------------------------------------------------
 |       Dec-06                |	 8,51,584   |	 3,13,305  |	 1,19,384  |	12,84,836   |
  -----------------------------------------------------------------------------------
 |    Allocation	              |    66%	     |    25% 	   |     9%	    |    100%     |
  -----------------------------------------------------------------------------------
 |       Dec-06                |	 8,51,584   |	 3,13,305  |	 1,19,384  |	12,84,836   |
  -----------------------------------------------------------------------------------
 |       Dec-07                |	13,35,324   |	3,35,124   |	1,38,730   |	18,09,178   |
  -----------------------------------------------------------------------------------
 |     Allocation	             |    74%      | 	  18%	    |    8%      |	   100%     |
  -----------------------------------------------------------------------------------
 |      Dec-08	                |   6,50,684	 | 3,97,317	  | 1,76,097	  |  12,24,098  |
  -----------------------------------------------------------------------------------
 |     Allocation	             |     53%     |	   32%     |	  14%      |	   100%     |
  -----------------------------------------------------------------------------------
 |       Dec-09                | 	11,55,555  |	3,43,246   |	2,18,795	  |  17,17,595  |
  -----------------------------------------------------------------------------------

  It’s clear that due to changing markets, the desired allocation has deviated.

  You need to design a system that will suggest actions to ensure that the desired allocation percentages are equal to the actual percentages invested.  The desired allocation percentage should be derived from the initial allocation made. If 5000, 2000, 3000 is initial allocation, then desired percentage is 50%, 20% and 30%. The rebalanced portfolio would look like this:

  --------------------------------------------------------------------------------
 |                             |  Equity	  |   Debt	   |    Gold	   |    Total    |
  --------------------------------------------------------------------------------
 |          Dec-05	            | 6,00,000	 | 3,00,000	 | 1,00,000	   | 10,00,000  |
  --------------------------------------------------------------------------------
 |        Allocation           |	  60%	    |   30%	    |   10%	      |   100%.    |
  --------------------------------------------------------------------------------
 |        Dec-06	              | 8,51,584	 | 3,13,305	 |  1,19,384	  | 12,84,836  |
  --------------------------------------------------------------------------------
 |       Allocation            |	  66%	    |    25%	    |    9%	     |   100%     |
  --------------------------------------------------------------------------------
 | Dec-06 (Post Rebalancing)   | 7,70,901  | 3,85,451   |  1,28,484  | 12,84,836  | 
  --------------------------------------------------------------------------------
 |       Allocation	           |   60%     |	   30%     |	   10%     |	  100%     |
  --------------------------------------------------------------------------------
 |       Dec-07	               | 12,08,811 |	4,12,295   |	 1,48,602  | 17,69,708  |
  --------------------------------------------------------------------------------
 |       Allocation	           |   68%     |	   23%     |	   9%      |	  100%     |
  --------------------------------------------------------------------------------	
 | Dec-07 (Post Rebalancing)   | 10,61,825 | 5,30,912   |  1,76,9714 | 17,69,708  | 
  --------------------------------------------------------------------------------
 |      Allocation	            |   60%     |	   30%     |	   10%     |	  100%     |
  --------------------------------------------------------------------------------
 |       Dec-08	               | 5,17,412  |	6,29,439   |	 2,24,639  | 13,71,490  |
  --------------------------------------------------------------------------------
 |      Allocation	            |   38%     |	   46%     |	   16%     |	  100%     |
  --------------------------------------------------------------------------------
 | Dec-08 (Post Rebalancing)   | 8,22,894  | 4,11,447   |  1,37,149  | 13,71,490  |
  --------------------------------------------------------------------------------
 |      Allocation	            |   60%     |	   30%     |	   10%     |	  100%     |
  -------------------------------------------------------------------------------- 
 |       Dec-09	               | 14,51,396 |	3,56,116   |	 1,70,011  | 19,77,523  |
  --------------------------------------------------------------------------------			

 Your program should take as input:
  1. The money allocated in equity, debt and gold funds.
  2. Monthly SIP payments.
  3. Monthly change rate (loss or growth) for each type of fund.

 The output should be
 1. Balanced amount of each fund for a certain month.
 2. Rebalanced amount of each month if applicable.
 Input Commands

 There are 5 input commands defined to separate out the actions. Your input format will start with either of these commands i.e ALLOCATE, SIP, CHANGE,   BALANCE, REBALANCE

 ALLOCATE

 The ALLOCATE command receives the initial investment amounts for each fund.

 Format - ALLOCATE AMOUNT_EQUITY AMOUNT_DEBT AMOUNT_GOLD
 Example- ALLOCATE 6000 3000 1000 means that an amount of 6000, 3000 and 1000 is initially invested in equity, debt and gold fund respectively.

 SIP

 The SIP command receives the investment amount on a monthly basis for each fund.

 Format - SIP AMOUNT_EQUITY AMOUNT_DEBT AMOUNT_GOLD
 Example - SIP 2000 1000 500 means a monthly payment of 2000, 1000 and 500 is done against each of equity, debt and gold funds respectivelty.

 CHANGE

 The CHANGE command receives the monthly rate of change (growth or loss) for each fund type. A negative value represents a loss.

 Format - CHANGE AMOUNT_EQUITY AMOUNT_DEBT AMOUNT_GOLD MONTH
 Example - CHANGE 8.00% -3.00% 7.00% APRIL means in the month of April equity received a growth of 8%, debt has taken a loss by 3% and gold received a  growth of 7%.

 BALANCE

 The BALANCE command receives a month name.

 Format - BALANCE MONTH
 Example - BALANCE APRIL means - print the balance for each fund as on April month.

 REBALANCE

 The REBALANCE command receives no additional inputs.

 Input format - REBALANCE
 Example - REBALANCE - Rebalance happens compulsorily after 6 months in June and December. The REBALANCE command shows the last rebalanced amount for each fund at the time of rebalancing. If 6 months data is not available then print CANNOT_REBALANCE.

 Output format - EQUITY DEBT GOLD
  Example - 10593 7898 2273
  Assumptions
   1. Balances are always floored to the nearest integers.
   2. The rebalancing happens on 6th (June) and 12th (December) month.
   3. The allocation always happens from January, and SIP from February.
   SAMPLE INPUT-OUTPUT 1

  INPUT:
   ALLOCATE 6000 3000 1000
   SIP 2000 1000 500
   CHANGE 4.00% 10.00% 2.00% JANUARY
   CHANGE -10.00% 40.00% 0.00% FEBRUARY
   CHANGE 12.50% 12.50% 12.50% MARCH
   CHANGE 8.00% -3.00% 7.00% APRIL
   CHANGE 13.00% 21.00% 10.50% MAY
   CHANGE 10.00% 8.00% -5.00% JUNE
   BALANCE MARCH
   REBALANCE

  OUTPUT:
   10593 7897 2272
   23619 11809 3936
   
   # How to Install and Run the Project
   
   This is build using Node.js 
   
   ** Executing the Application **
     
   1. npm install
   2. npm run start

   This would read a commands from /data/input.txt and would execute the commands accordingly.
   
   ** Runing Test Cases **
   
   1. npm install
   2.  npm run test
   
   ** linting the project  ***
   
   npm run lint
   

   
   
   
   
