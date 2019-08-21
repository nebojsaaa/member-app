const express = require('express');
const router = express.Router();
const Member = require('../../models/Members');


// Gets All members
router.get('/', async (req, res) => {
	try {
		const members = await Member.find();
		res.json(members);
	} catch (err) {
		res.json({ message: err });
	}
});

// Get single memeber
router.get('/:memberId', async (req, res) => {
	try {
		const member = await Member.findById(req.params.memberId);
		res.json(member);
	} catch (err) {
		res.json({ message: err });
	}
});

// Create Member
router.post('/', async (req, res) => {
	const member = new Member({
		 name: req.body.name,
		 email: req.body.email,
		 status: req.body.status
	});
	
	try {
		const savedMember = await member.save();
		res.json(savedMember);
	} catch (err) {
		res.json({ message: err });
	}
});

// Update Member
router.patch('/:memberId', async (req, res) => {
	try {
		const newObj = {
			name: req.body.name,
			status: req.body.status
		}

		const options = {
			returnNewDocument: false
		};

		const updatedMember = await Member.findOneAndUpdate(
			{ _id: req.params.memberId },
			{ $set: newObj },
			options
		);
		res.json(updatedMember);
	} catch (err) {
		res.json({ message: err });
	}
});

// Delete memeber
router.delete('/:memberId', async (req, res) => {
	try {
		const removedMember = await Member.remove({ _id: req.params.memberId})
		res.json(removedMember);
	} catch (err) {
		res.json({ message: err });
	}
});

module.exports = router;
