import { body, header } from 'express-validator';
export const CreatejobSchema=[




    /**<h3>{props.title}</h3>
            <p>{props.description}</p>
            <h3>Depertment {props.depertment}</h3>
            <h3>Skill set :{props.skillset} Skill : {props.minSkill}</h3>
            <h3>Must have : {props.musthave}</h3>
            <h3>Recruiter : {props.recruter} </h3>
            <h3>Status : {props.status}</h3> */
    
    body('title').exists({ checkFalsy: true }).trim().withMessage('title can not be null or empty'),
    body('description').exists({ checkFalsy: true }).trim().withMessage('description can not be null or empty'),
    body('skillset').exists({ checkFalsy: true }).trim().withMessage('skillset can not be null or empty'),
    body('musthave').exists({ checkFalsy: true }).trim().withMessage('musthave can not be null or empty'),
    body('recruter').exists({ checkFalsy: true }).trim().withMessage('recruter can not be null or empty'),
    body('status').exists({ checkFalsy: true }).trim().withMessage('status can not be null or empty'),
    body('expire').exists({ checkFalsy: true }).trim().withMessage('expire can not be null or empty'),



]