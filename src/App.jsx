import { useState } from "react";

const App = () => {
  const [currentDate,setCurrentDate]=useState(new Date());
  const [currentMonth,setCurrentMonth]=useState(new Date().getMonth())
  const [currentYear,setCurrentYear]=useState(new Date().getFullYear())

  const weekdays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
  const generateYears=()=>{
    const years=[];
    const year=new Date().getFullYear()

    for (let i=0;i<10;i++){
      years.push((year-5)+i);
    }

    return years

  }  

  const generateDates=()=>{
    const dates=[]
    const firstDay=new Date(currentYear,currentMonth,1).getDay()
    const lastDate=new Date(currentYear,currentMonth+1,0).getDate()

    for (let i=0;i<firstDay;i++){
      dates.push(null)
    }

    for (let i=1;i<=lastDate;i++){
      dates.push(i)
    }
    return dates
  }

  const checkDate=(date)=>{
    const todayDate=new Date().getDate()
    const todayYear=new Date().getFullYear()
    const todayMonth=new Date().getMonth()
    const checktoday=new Date(currentYear,currentMonth,date)
    const checkDate=checktoday.getDate()
    const checkYear=checktoday.getFullYear()
    const checkMonth=checktoday.getMonth()
    if (todayDate===checkDate){
      if (todayMonth===checkMonth){
        if (todayYear===checkYear){
          return true
        }
      }
    }
    return false

  }

  const prevMonth=()=>{
    if (currentMonth===0){
      setCurrentMonth(11)
      setCurrentYear((prevCurrentYear)=>prevCurrentYear-1)
    }
    else{
      setCurrentMonth(currentMonth-1)
    }
  }

  const nextMonth=()=>{
    if (currentMonth===11){
      setCurrentMonth(0)
      setCurrentYear((prevCurrentYear)=>prevCurrentYear+1)
    }
    else{
      setCurrentMonth(currentMonth+1)
    }
  }


  return (
    <div className="calender">
      <div className="header">
        <div className="monthsandyears">
          <button onClick={prevMonth}>
          <img src="./arrow-left-solid.svg" alt="" />
          </button>
          <select name="Months" value={currentMonth} onChange={(e)=>setCurrentMonth(e.target.value)}>
            {months.map((month,index)=>(
              <option key={index} value={index}>{month}</option>
            ))}
          </select>
          <select name="Years" value={currentYear} onChange={(e)=>setCurrentYear(e.target.value)}>
            {generateYears().map((year,index)=>(
              <option key={index} value={year}>{year}</option>
            ))}
          </select>
          <button onClick={nextMonth}><img src="./arrow-right-solid.svg" alt="" /></button>
        </div>
        <div className="Weeks">
         {weekdays.map((weekday,index)=>(
          <p key={index}>{weekday}</p>
         ))}
        </div>
      </div>
      <div className="days">
        {generateDates().map((date,index)=>(
          <p key={index} className={date?(checkDate(date)?"currentdate":"para"):""} >{date}</p>
        ))} 
      </div>
    </div>
  )
}

export default App;