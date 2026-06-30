import express from 'express'
import { applyForJob, getUserData, getUserJobApplications, updateUserResume } from '../controllers/userController.js'
import upload from '../config/multer.js'
// cg 
import { requireAuth } from '@clerk/express'

const router = express.Router()

// // Get user Data
// router.get('/user', getUserData)

// // Apply for a job
// router.post('/apply', applyForJob)

// // Get applied jobs data
// router.get('/applications', getUserJobApplications)

// // Update user profile (resume)
// router.post('/update-resume', upload.single('resume'), updateUserResume)

// cg 
router.get('/user', requireAuth(), getUserData)

router.post('/apply', requireAuth(), applyForJob)

router.get('/applications', requireAuth(), getUserJobApplications)

router.post(
  '/update-resume',
  requireAuth(),
  upload.single('resume'),
  updateUserResume)

export default router;