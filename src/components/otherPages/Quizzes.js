import React, { useState } from 'react'

const Quizzes = () => {

    const [showAllCricket, setShowAllCricket] = useState(false);
    const [showAllBadminton, setShowAllBadminton] = useState(false);
    const [showAllHealth, setShowAllHealth] = useState(false);
    const [showAllFootball, setShowAllFootball] = useState(false);
    const toggleShowAllCricket = () => setShowAllCricket(!showAllCricket);
    const toggleShowAllBadminton = () => setShowAllBadminton(!showAllBadminton);
    const toggleShowAllHealth = () => setShowAllHealth(!showAllHealth);
    const toggleShowAllFootball = () => setShowAllFootball(!showAllFootball);

    const cricket = [
        { id: 1, que: 'When did India win the Cricket World Cup for the first time?', option1: '1985', option2: '1983', option3: '1984', option4: '1982' },
        { id: 2, que: 'What does LBW stand for?', option1: 'Leg Before Wicket', option2: 'Left By Win', option3: 'Late Before Wicket', option4: 'Leg by West' },
        { id: 3, que: 'How many times has India won the ICC Cricket World Cup?', option1: 'Thrice', option2: 'Once', option3: 'Five', option4: 'Twice' },
        { id: 4, que: 'In T20 cricket, what is the maximum number of overs allowed per team?', option1: '20', option2: '90', option3: '50', option4: '10' },
        { id: 5, que: 'What does IPL stand for?', option1: 'Indian Premier Competition', option2: 'In Pickleball League', option3: 'Indian Premier League', option4: 'International Prime League' },
        { id: 6, que: 'Which cricketer is known as ‘The Wall’?', option1: 'Sourav Ganguly', option2: 'Rahul Dravid', option3: 'Anil Kumble', option4: 'Sachin Tendulkar' },
        { id: 7, que: 'Who is known as the ‘God of Cricket’?', option1: 'Yuvraj Singh', option2: 'Anil Kumble', option3: 'Sachin Tendulkar', option4: 'Rahul Dravid' },
        { id: 8, que: 'Which cricket stadium is known as the “Home of Cricket”?', option1: 'Lord’s Cricket Ground', option2: 'Dharamshala Ground', option3: 'Melbourne Ground', option4: 'Eden Gardens' },
        { id: 9, que: 'In which year was the Indian Premier League (IPL) inaugurated?', option1: '2010', option2: '2005', option3: '2009', option4: '2008' },
        { id: 10, que: 'What does the cricket term “Maiden” mean?', option1: 'An over with a no ball', option2: 'An over with no runs scored', option3: 'A wide ball', option4: 'A sixer shot' },
        { id: 11, que: 'Who is the current (as of 2025) Test captain of the Indian cricket team?', option1: 'Rohit Sharma', option2: 'Hardik Pandya', option3: 'Virat Kohli', option4: 'Shubhman Gill' },
        { id: 12, que: 'Which cricketer is known as “Rawalpindi Express”?', option1: 'Wasim Akram', option2: 'Waqar Younis', option3: 'Moeen Ali', option4: 'Shoaib Akhtar' },
        { id: 13, que: 'Which country is the birthplace of cricket?', option1: 'India', option2: 'England', option3: 'South Africa', option4: 'Australia' },
        { id: 14, que: 'Who is known as the ‘Queen of Indian Cricket’?', option1: 'Harmanpreet Kaur', option2: 'Jhulan Goswami', option3: 'Mithali Raj', option4: 'Smriti Mandhana' },
        { id: 15, que: 'How many players are there in each cricket team on the field during a match?', option1: '8', option2: '15', option3: '10', option4: '11' },
        { id: 16, que: 'Which format of cricket involves two teams playing a single match over a maximum of 50 overs per side?', option1: 'ODI', option2: 'T10', option3: 'Test Match', option4: 'T20' },
        { id: 17, que: 'How many runs are awarded for hitting the ball over the boundary rope without it bouncing?', option1: '7', option2: '6', option3: '1', option4: '4' },
        { id: 18, que: 'Which bowler holds the record for the most wickets taken in Test cricket history?', option1: 'R Ashwin', option2: 'Suard Broad', option3: 'Muttiah Muralitharan (Sri Lanka)', option4: 'Anil Kumble' },
        { id: 19, que: 'What is the name of the prestigious trophy awarded to the winner of the Cricket World Cup?', option1: 'ICC Cricket World Cup', option2: 'Thomas Cup', option3: 'Champions Trophy', option4: 'FA Cup' },
        { id: 20, que: 'Which team won the first IPL tournament in 2008?', option1: 'RCB', option2: 'Delhi Capitals', option3: 'Pune Warriors', option4: 'Rajasthan Royals' },
        { id: 21, que: 'Which team has won the most IPL titles?', option1: 'KKR', option2: 'Sunrisers Hyderabad', option3: 'Mumbai Indians', option4: 'CSK' },
        { id: 22, que: 'Who has scored the most runs in IPL history?', option1: 'Suryakumar Yadav', option2: 'Shubhman Gill', option3: 'Yuvraj Singh', option4: 'Virat Kohli' },
        { id: 23, que: 'Which Indian stadium is known as the ‘Lords of Asia?', option1: 'M. Chinnaswamy Stadium', option2: 'Eden Gardens. Kolkata', option3: 'Wankhede Stadium', option4: 'Dharamshala Ground' },
        { id: 24, que: 'Which Indian cricketer blasted 6 sixes in 2007 World Cup match?', option1: 'Yuvraj Singh', option2: 'Virender Sehwag', option3: 'Sachin Tendulkar', option4: 'MS Dhoni' },
        { id: 25, que: 'Who was the 1st captain of the Indian test team?', option1: 'Kapil Dev', option2: 'Ravi Shastri', option3: 'CK Nayudu', option4: 'Sunil Gavaskar' },
        { id: 26, que: 'Whose brainchild was the creation of IPL in 2008?', option1: 'Jay Shah', option2: 'Rajiv Shukla', option3: 'Sharad Pawar', option4: 'Lalit Modi' },
        { id: 27, que: 'Who is the current President of BCCI?', option1: 'Gautam Gambhir', option2: 'Ajit Agarkar', option3: 'Roger Binny', option4: 'Jay Shah' },
        { id: 28, que: 'Which IPL team is owned by Nita & Akash Ambani?', option1: 'CSK', option2: 'KKR', option3: 'Mumbai Indians', option4: 'Gujarat Titans' },
        { id: 29, que: 'Who is the owner of Kings XI Punjab?', option1: 'Nita Ambani', option2: 'Shahrukh Khan', option3: 'Preity Zinta', option4: 'Sanjiv Goenka' },
        { id: 30, que: 'What is the maximum number of foreign players allowed in an IPL playing XI?', option1: '04', option2: '05', option3: '02', option4: '06' },
        { id: 31, que: 'Which team was the winner of IPL 2024?', option1: 'CSK', option2: 'RCB', option3: 'Kolkata Knight Riders', option4: 'MI' },
        { id: 32, que: 'Who is the new BCCI Secretary appointed in January 2025?', option1: 'Jay Shah', option2: 'Roger Binny', option3: 'Mohammed Kaif', option4: 'Devajit Saikia' },
        { id: 33, que: 'Which IPL team holds the record for the highest team total, as of 2024?', option1: 'RCB', option2: 'CSK', option3: 'LSG', option4: 'Delhi Capitals' },
        { id: 34, que: 'Who has played the highest number of games as an IPL Team Captain?', option1: 'Rohit Sharma', option2: 'AB Devilleirs', option3: 'MS Dhoni', option4: 'Virat Kohli' },
        { id: 35, que: 'Who has scored the fastest 50 in an IPL match?', option1: 'Nitish Rana', option2: 'KL Rahul', option3: 'Ishan Kishan', option4: 'Shubhman Gill' },
        { id: 36, que: 'Who is the captain of Kings XI Punjab for IPL 2025?', option1: 'Sam Curran', option2: 'Rinku Singh', option3: 'Rishabh Pant', option4: 'Shreyas Iyer' },
        { id: 37, que: 'Who is the captain of Lucknow Super Giants for IPL 2025?', option1: 'Krunal Pandya', option2: 'Rishabh Pant', option3: 'Quinton de Cock', option4: 'Nicholas Pooran' },
        { id: 38, que: 'Who is the captain of Mumbai Indians for IPL 2025?', option1: 'SKY', option2: 'Hardik Pandya', option3: 'Rohit Sharma', option4: 'Jasprit Bumrah' },
        { id: 39, que: 'Who is the captain of Kolkata Knight Riders for IPL 2025?', option1: 'Venkatesh Iyer', option2: 'Rinku Singh', option3: 'Sunil Narine', option4: 'Andre Russell' },
        { id: 40, que: 'Who has been the most expensive player in IPL auction 2025?', option1: 'Venkatesh Iyer', option2: 'Jasprit Bumrah', option3: 'Rishabh Pant', option4: 'Shreyas Iyer' },
    ]

    const badminton = [
        { id: 1, que: 'Who of the following was the first Indian to win the All-England Open Badminton Championship?', option1: 'Pullela Gopichand', option2: 'Prakash Padukone', option3: 'Kidambi Srikanth', option4: 'Nandu Natekar' },
        { id: 2, que: 'Who of the following is the first Indian to win an Olympic medal in badminton?', option1: 'Sania Mirza', option2: 'Lakshya Sen', option3: 'Saina Nehwal', option4: 'PV Sindhu' },
        { id: 3, que: 'Where are he Headquarters of BWF – Badminton World Federation located?', option1: 'Nepal', option2: 'China', option3: 'Turkey', option4: 'Malaysia' },
        { id: 4, que: 'Which country has won the greatest number of medals in badminton in Olympics?', option1: 'China', option2: 'India', option3: 'Thailand', option4: 'Indonesia' },
        { id: 5, que: 'Which Indian city is associated with the origin of badminton?', option1: 'Mumbai', option2: 'Pune', option3: 'Indore', option4: 'Chennai' },
        { id: 6, que: 'What is the score required to win a game in badminton?', option1: '19', option2: '11', option3: '15', option4: '21' },
        { id: 7, que: 'Which country has won the Thomas Cup the greatest number of times since its introduction?', option1: 'China', option2: 'Indonesia', option3: 'Malaysia', option4: 'India' },
        { id: 8, que: 'Who was the first badminton player to be awarded the Arjuna Award when they were introduced in 1961?', option1: 'Nandu Natekar', option2: 'Rohan Bopanna', option3: 'Prakash Padukone', option4: 'Saina Nehwal' },
        { id: 9, que: 'Thomas Cup is associated with which sport?', option1: 'Kho-Kho', option2: 'Table Tennis', option3: 'Badminton', option4: 'Football' },
        { id: 10, que: 'Which material is the shuttlecock typically made from?', option1: 'Rubber', option2: 'Plastic', option3: 'Silk', option4: 'Feathers/Cork' }
    ]

    const health = [
        { id: 1, que: 'Which vitamin is essential to strengthen bones in the body?', option1: 'Vitamin C', option2: 'Vitamin D', option3: 'Vitamin A', option4: 'Vitamin B' },
        { id: 2, que: 'What is the process of converting body fat into energy called?', option1: 'Digestion', option2: 'Solubility', option3: 'Fermentation', option4: 'Ketosis' },
        { id: 3, que: 'Which muscle group is targeted while doing squats?', option1: 'Quadriceps', option2: 'Abs', option3: 'Hamstring', option4: 'Glutes' },
        { id: 4, que: 'What is the recommended daily water intake for adults?', option1: '1 litre', option2: '4 litres', option3: '5 litres', option4: '02 Litres' },
        { id: 5, que: 'Which type of exercise helps improve flexibility?', option1: 'Yoga', option2: 'Zumba', option3: 'Gymnastics', option4: 'HIIT' },
        { id: 6, que: 'HIIT stands for _______________________', option1: 'High Interval Intensity Task', option2: 'High Internal Ingrown Task', option3: 'High Intensity Interval Training', option4: 'High Interval Intensity Training' },
        { id: 7, que: 'What is the recommended number of steps per day for an active lifestyle?', option1: '10,000', option2: '15000', option3: '1000', option4: '5000' },
        { id: 8, que: 'What is the ideal Blood Pressure figure in a healthy adult individual?', option1: '150/80', option2: '120/60', option3: '120/80', option4: '110/90' },
        { id: 9, que: 'Which of the below is a good source of complex carb?', option1: 'Whole wheat bread', option2: 'Canned fruit', option3: 'Cereals', option4: 'White bread' },
        { id: 10, que: 'Which of the following is a good source of fibre?', option1: 'White bread', option2: 'Canned fruit', option3: 'White rice', option4: 'Apple' },
        { id: 11, que: 'Low blood count / Haemoglobin count suggests the intake of which mineral element?', option1: 'Calcium', option2: 'Iron', option3: 'Magnesium', option4: 'Iodine' },
        { id: 12, que: 'What is the primary source of energy for the human body?', option1: 'Fats', option2: 'Protein', option3: 'Carbohydrates', option4: 'Vitamin' },
        { id: 13, que: 'Which nutrient is essential for the formation and repair of tissues in the body?', option1: 'Proteins', option2: 'Fibre', option3: 'Fats', option4: 'Carbs' },
        { id: 14, que: 'Which nutrient deficiency can lead to anaemia?', option1: 'Zinc', option2: 'Iron', option3: 'Magnesium', option4: 'Calcium' },
        { id: 15, que: 'As per Ayurveda, Indian food is divided into how many categories?', option1: 'Six', option2: 'Two', option3: 'Four', option4: 'Three' },
        { id: 16, que: 'What is the recommended amount of physical activity for adults, as per the World Health Organization (WHO)?', option1: '1 Hr', option2: '4 Hrs', option3: '2.5 Hrs per week', option4: '5 Hrs' },
        { id: 17, que: 'In UV rays – UV stands for ____________________.', option1: 'Upper Violet', option2: 'Ultra Veen', option3: 'Unidentified Variable', option4: 'Ultra-violet' },
        { id: 18, que: 'What is the recommended amount of sleep for adults on average, for optimal health and well-being?', option1: '08 Hrs per night', option2: '12 Hrs', option3: '10 Hrs', option4: '2 Hrs' },
        { id: 19, que: 'Insulin resistance is associated with which disease?', option1: 'Indigestion', option2: 'Rickets', option3: 'Cholesterol', option4: 'Diabetes' },
        { id: 20, que: 'Which Indian Ministry is termed as the Ministry for alternative healthcare?', option1: 'Ministry of Women & Child Development', option2: 'Pradhan Mantri Rozgaar Yojana', option3: 'AYUSH', option4: 'None of these' },
    ]

    const football = [
        { id: 1, que: 'What is the name of the player who guards the goal?', option1: 'Centre-forward', option2: 'Attacker', option3: 'GoalkeeperDefender', option4: 'None of these' },
        { id: 2, que: 'What is the minimum number of players for a game of Football?', option1: '11', option2: '8', option3: '15', option4: '6' },
        { id: 3, que: "Which player has won the most Ballon d'Or awards?", option1: 'Cristiano Ronaldo', option2: 'Lionel Messi', option3: 'Kylian Mbappe', option4: 'Neymar Jr.' },
        { id: 4, que: 'Which team won the 1st Premier League title?', option1: 'Arsenal', option2: 'Liverpool', option3: 'Chelsea', option4: 'Manchester United' },
        { id: 5, que: 'Which country won the 1st Football World Cup in 1930?', option1: 'Germany', option2: 'Portugal', option3: 'Uruguay', option4: 'England' },
        { id: 6, que: 'Which team did Ronaldo play for before signing for MAN-U?', option1: 'Sporting Lisbon', option2: 'Al-Nassr', option3: 'Barcelona', option4: 'Juventus' },
        { id: 7, que: 'Which multinational sportswear brand is Messi an ambassador for?', option1: 'Reebok', option2: 'Puma', option3: 'Adidas', option4: 'Nike' },
        { id: 8, que: 'Which club has the most Champions League titles?', option1: 'Real Madrid (15)', option2: 'Manchester United', option3: 'Liverpool', option4: 'Barcelona' },
        { id: 9, que: 'Who has been the top goal scorer of all time in Champion’s League?', option1: 'David Beckham', option2: 'Lionel Messi', option3: 'Cristiano Ronaldo', option4: 'Eric Halland' },
        { id: 10, que: 'Which reputed club is associated with ‘Galacticos’?', option1: 'Bayern Munich', option2: 'Manchester City', option3: 'Inter-Miami', option4: 'Real Madrid' },
        { id: 11, que: 'Which MLS franchise does David Beckham own?', option1: 'Charlotte FC', option2: 'LA Galaxy', option3: 'Inter-Miami', option4: 'Atlanta United' },
        { id: 12, que: 'Bayern Munich is a club associated with which league?', option1: 'Bundesliga', option2: 'La Liga', option3: 'Thai League', option4: 'Premier League' },
        { id: 13, que: 'As of 2022, how many Ballon d’Or awards has Lionel Messi won?', option1: '05', option2: '07', option3: '11', option4: '08' },
        { id: 14, que: 'Which star Indian footballer was the first to be signed for the Kansas City Chiefs in 2010?', option1: 'Gurpreet Sandhu', option2: 'Sunil Chettri', option3: 'Subrata Pal', option4: 'PK Banerjee' },
        { id: 15, que: 'Who is 1st Indian woman footballer to win an Arjuna award in 1983?', option1: 'Ritu Rani', option2: 'Sweety Devi', option3: 'Panthoi Chanu', option4: 'Shanti Mullick' },
    ]

    const Questions1 = showAllCricket ? cricket : cricket.slice(0, 5);
    const Questions2 = showAllBadminton ? badminton : badminton.slice(0, 5);
    const Questions3 = showAllHealth ? health : health.slice(0, 5);
    const Questions4 = showAllFootball ? football : football.slice(0, 5);


    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <h1 className='text-2xl underline'>Cricket Quiz</h1>
                        {
                            Questions1.map((res) => {
                                return (
                                    <div key={res.id} className='rounded-[6px] mt-4 overflow-hidden shadow-[0px_4px_8.4px_#0000001A]'>
                                        <div className="text-[#464646] bg-[#EBF2FF] d-flex gap-1 justify-between items-center px-3 py-3 border-b">
                                            {res.id}. {res.que}
                                        </div>
                                        <div className='row p-3 gy-4'>
                                            <div className='col-6'>
                                                <div className='border rounded-lg p-2 flex items-center gap-2'>
                                                    <input type="radio" name='question' className='w-[20px] h-[20px] accent-theme-color' />{res.option1}
                                                </div>
                                            </div>
                                            <div className='col-6'>
                                                <div className='border rounded-lg p-2 flex items-center gap-2'>
                                                    <input type="radio" name='question' className='w-[20px] h-[20px] accent-theme-color' />{res.option2}
                                                </div>
                                            </div>
                                            <div className='col-6'>
                                                <div className='border rounded-lg p-2 flex items-center gap-2'>
                                                    <input type="radio" name='question' className='w-[20px] h-[20px] accent-theme-color' />{res.option3}
                                                </div>
                                            </div>
                                            <div className='col-6'>
                                                <div className='border rounded-lg p-2 flex items-center gap-2'>
                                                    <input type="radio" name='question' className='w-[20px] h-[20px] accent-theme-color' />{res.option4}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className='text-center'>
                            <button onClick={toggleShowAllCricket} className='mt-4 px-4 py-2 bg-theme-color text-white rounded text-sm'>
                                {showAllCricket ? 'Show Less' : 'Show More'}
                            </button>
                        </div>

                        <h1 className='text-2xl underline border-t mt-4 pt-4'>Badminton Quiz</h1>
                        {
                            Questions2.map((res) => {
                                return (
                                    <div key={res.id} className='rounded-[6px] mt-4 overflow-hidden shadow-[0px_4px_8.4px_#0000001A]'>
                                        <div className="text-[#464646] bg-[#EBF2FF] d-flex gap-1 justify-between items-center px-3 py-3 border-b">
                                            {res.id}. {res.que}
                                        </div>
                                        <div className='row p-3 gy-4'>
                                            <div className='col-6'>
                                                <div className='border rounded-lg p-2 flex items-center gap-2'>
                                                    <input type="radio" name='question' className='w-[20px] h-[20px] accent-theme-color' />{res.option1}
                                                </div>
                                            </div>
                                            <div className='col-6'>
                                                <div className='border rounded-lg p-2 flex items-center gap-2'>
                                                    <input type="radio" name='question' className='w-[20px] h-[20px] accent-theme-color' />{res.option2}
                                                </div>
                                            </div>
                                            <div className='col-6'>
                                                <div className='border rounded-lg p-2 flex items-center gap-2'>
                                                    <input type="radio" name='question' className='w-[20px] h-[20px] accent-theme-color' />{res.option3}
                                                </div>
                                            </div>
                                            <div className='col-6'>
                                                <div className='border rounded-lg p-2 flex items-center gap-2'>
                                                    <input type="radio" name='question' className='w-[20px] h-[20px] accent-theme-color' />{res.option4}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className='text-center'>
                            <button onClick={toggleShowAllBadminton} className='mt-4 px-4 py-2 bg-theme-color text-white rounded text-sm'>
                                {showAllBadminton ? 'Show Less' : 'Show More'}
                            </button>
                        </div>

                        <h1 className='text-2xl underline border-t mt-4 pt-4'>Health & Fitness Quiz</h1>
                        {
                            Questions3.map((res) => {
                                return (
                                    <div key={res.id} className='rounded-[6px] mt-4 overflow-hidden shadow-[0px_4px_8.4px_#0000001A]'>
                                        <div className="text-[#464646] bg-[#EBF2FF] d-flex gap-1 justify-between items-center px-3 py-3 border-b">
                                            {res.id}. {res.que}
                                        </div>
                                        <div className='row p-3 gy-4'>
                                            <div className='col-6'>
                                                <div className='border rounded-lg p-2 flex items-center gap-2'>
                                                    <input type="radio" name='question' className='w-[20px] h-[20px] accent-theme-color' />{res.option1}
                                                </div>
                                            </div>
                                            <div className='col-6'>
                                                <div className='border rounded-lg p-2 flex items-center gap-2'>
                                                    <input type="radio" name='question' className='w-[20px] h-[20px] accent-theme-color' />{res.option2}
                                                </div>
                                            </div>
                                            <div className='col-6'>
                                                <div className='border rounded-lg p-2 flex items-center gap-2'>
                                                    <input type="radio" name='question' className='w-[20px] h-[20px] accent-theme-color' />{res.option3}
                                                </div>
                                            </div>
                                            <div className='col-6'>
                                                <div className='border rounded-lg p-2 flex items-center gap-2'>
                                                    <input type="radio" name='question' className='w-[20px] h-[20px] accent-theme-color' />{res.option4}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className='text-center'>
                            <button onClick={toggleShowAllHealth} className='mt-4 px-4 py-2 bg-theme-color text-white rounded text-sm'>
                                {showAllHealth ? 'Show Less' : 'Show More'}
                            </button>
                        </div>

                        <h1 className='text-2xl underline border-t mt-4 pt-4'>Football Quiz</h1>
                        {
                            Questions4.map((res) => {
                                return (
                                    <div key={res.id} className='rounded-[6px] mt-4 overflow-hidden shadow-[0px_4px_8.4px_#0000001A]'>
                                        <div className="text-[#464646] bg-[#EBF2FF] d-flex gap-1 justify-between items-center px-3 py-3 border-b">
                                            {res.id}. {res.que}
                                        </div>
                                        <div className='row p-3 gy-4'>
                                            <div className='col-6'>
                                                <div className='border rounded-lg p-2 flex items-center gap-2'>
                                                    <input type="radio" name='question' className='w-[20px] h-[20px] accent-theme-color' />{res.option1}
                                                </div>
                                            </div>
                                            <div className='col-6'>
                                                <div className='border rounded-lg p-2 flex items-center gap-2'>
                                                    <input type="radio" name='question' className='w-[20px] h-[20px] accent-theme-color' />{res.option2}
                                                </div>
                                            </div>
                                            <div className='col-6'>
                                                <div className='border rounded-lg p-2 flex items-center gap-2'>
                                                    <input type="radio" name='question' className='w-[20px] h-[20px] accent-theme-color' />{res.option3}
                                                </div>
                                            </div>
                                            <div className='col-6'>
                                                <div className='border rounded-lg p-2 flex items-center gap-2'>
                                                    <input type="radio" name='question' className='w-[20px] h-[20px] accent-theme-color' />{res.option4}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className='text-center'>
                            <button onClick={toggleShowAllFootball} className='mt-4 px-4 py-2 bg-theme-color text-white rounded text-sm'>
                                {showAllFootball ? 'Show Less' : 'Show More'}
                            </button>
                        </div>
                    </div>
                    <div className="col-3 offset-1">
                        <div className='sticky top-0'>
                            <img src="/assets/images/svg/banner5.png" alt="banner" className='mb-4 mx-auto' />
                            <img src="/assets/images/svg/banner6.png" alt="banner" className='mx-auto' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Quizzes