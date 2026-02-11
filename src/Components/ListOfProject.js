import './ListOfProject.css';

export default function Project(){
    const projectList = [
        {
        link:"https://bankist-gamma-five.vercel.app/",
        githubURL : "https://github.com/shrutika241998/Bankist",
        name:"Bank Account Application",
        description : "A small bank application which holds information about the account transaction details."
        },{
            link:"https://htvnz4.csb.app/",
            name: "Gmail Application",
            description : "A React application madeup of React JS, where it is small version of GMAIL."
        },{
            
            link:"https://ngfs9z.csb.app/",
            name: "Emoji Application",
            description : "A CLI application madeup of JS, where we can get to know the meaning of Emoji!!!!"
        
        },{
            
            link:"https://l32ijr.csb.app/",
            name: "Book Recommendation",
            description:"A React application madeup of React JS, where we can get to know book recommendation App by selecting the genre."
        
        },{
            link:"https://jovial-starburst-c6556f.netlify.app/",
            name: "Profit and Loss",
            description : "A CLI application madeup of JS, where we can get the profit and loss."
        },{
            link:"https://nimble-eclair-a24b4e.netlify.app/",
            name:"Check Palindrome",
            description :"A CLI application madeup of JS, where we can get to whether birthday date is Palindrome or not!!!!"
        },{
            link:"https://ornate-sopapillas-2145df.netlify.app/",
            name:"Cash Register Manager",
            description : "A CLI application madeup of JS, where we can get the amount of notes to be return"
        },{
            link:"https://bejewelled-alfajores-4fc350.netlify.app/",
            name:"Minions Language Translator",
            description : "A CLI application madeup of JS, where it translates our english in Gibberish language."
        }]

    return <div className='ProjectPage'>
    <ul className="ProjectList">
    {
        projectList.map((val)=>{
            return <li className="ProjectName">
            <a href={val.link} className="nameValue">{val.name}</a>
            <p className='desc'>{val.description}</p>
            
            <div className='techStack'>
            <img src='/javascriptLogo.png' width="30" height="30" alt="JS" />
            <img src='/logo192.png' width="30" height="30" alt="192"/>
            </div>
            
            </li>
        })
    }
    </ul>
    </div>
}