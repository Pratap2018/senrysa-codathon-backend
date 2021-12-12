import { body, header } from 'express-validator';
export const CandidateProfileSchema=[




    /**<h3>{props.title}</h3>
            <p>{props.description}</p>
            <h3>Depertment {props.depertment}</h3>
            <h3>Skill set :{props.skillset} Skill : {props.minSkill}</h3>
            <h3>Must have : {props.musthave}</h3>
            <h3>Recruiter : {props.recruter} </h3>
            <h3>Status : {props.status}</h3> */
    
    body('email').exists({ checkFalsy: true }).trim().withMessage('email can not be null or empty'),
    body('skill').exists({ checkFalsy: true }).trim().withMessage('skill can not be null or empty'),
    body('musthaveSkill').exists({ checkFalsy: true }).trim().withMessage('musthaveSkill can not be null or empty'),
    body('resume').exists({ checkFalsy: true }).trim().withMessage('resume can not be null or empty'),
    

]