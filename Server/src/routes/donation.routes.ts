import { Router } from 'express';
import {
  handleFetchAllDonations,
  handleFetchDonationsByUser,
  handlePostDonation,
  handleDeleteDonation,
  handleUpdateDonation,
  handleFetchDonationById,
} from '../controllers/donation.controller';
import { verifyJWT, verifyPermission } from '../middlewares/auth/user.middlewares';

const router = Router();

router.get('/', verifyJWT, handleFetchAllDonations);
router.get('/:id', verifyJWT, handleFetchDonationById);
router.get(
  '/user/:userId',
  verifyJWT,
  verifyPermission(['alumni', 'admin']),
  handleFetchDonationsByUser
);
router.post('/', verifyJWT, verifyPermission(['alumni', 'admin']), handlePostDonation);
router.delete('/:id', verifyJWT, verifyPermission(['alumni', 'admin']), handleDeleteDonation);
router.put('/:id', verifyJWT, verifyPermission(['alumni', 'admin']), handleUpdateDonation);

export default router;
