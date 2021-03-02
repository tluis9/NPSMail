import { Router } from 'express';
import { UserController } from './controllers/UserController';
import { AnswerController } from './controllers/AnswerController';
import { SurveysController } from './controllers/SurveysController';
import { SurveysRepository } from './repositories/SurveyRepository';
import { SendMailController } from './controllers/SendMailController';
import { NpsController } from './controllers/NpsControler';

const router = Router();

const userController = new UserController();
const surveysController = new SurveysController();
const sendMailController = new SendMailController();
const answerController = new AnswerController();
const npsController = new NpsController();

router.post("/users", userController.create);
router.post("/surveys", surveysController.create);
router.get("/surveys", surveysController.show);
router.post("/sendMail", sendMailController.execute);
router.get("/answers/:value", answerController.execute);
router.get("/nps/:survey_id", npsController.execute);

export {router};