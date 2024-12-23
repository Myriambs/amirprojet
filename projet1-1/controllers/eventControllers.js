const event = require ('../models/eventModel')


// Add Event
exports.addEvent = async (req , res) => {
    try{
        const newEvent = await event.create(req.body)
        res.status(201).json({msg : 'Event added successfuly', newEvent})
    } catch(err){
        res.status(500).json({ error: err.message })
    }
}

// Get Event
exports.getEvent= async (req , res) => {
    try{
        const events = await event.find()
        res.status(200).json(events)
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}

// Update Event
exports.UpdateEvent = async (req , res) => {
    try{
        const {id} = req.params
        const UpdatedEvent = await event.findByIdAndUpdate(id, req.body, {new:true})
        res.status(200).json({msg: 'Event updated successfuly', UpdatedEvent})
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}

// Delete Event
exports.deleteEvent = async (req , res) =>{
    try{
        const {id} = req.params
        const DeleteEvent = await event.findByIdAndDelete(id)
        res.status(200).json({msg: 'Event deleted successfuly', DeleteEvent})
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}