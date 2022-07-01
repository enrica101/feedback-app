import {motion, AnimatePresence} from 'framer-motion/dist/framer-motion'
import PropTypes from 'prop-types'
import React from 'react'
import FeedbackItem from "./FeedbackItem"

function FeedbackList({feedback, handleDelete}) {
    if(!feedback || FeedbackList.length === 0){
        return (<p>No Feedback Yet</p>)
    }

    return (
        <div className="feedback-list">
        <AnimatePresence>
            {feedback.map((item) => (
                <motion.div 
                    key={item.id}
                    initial={{opacity:0}} //invisncible by default 
                    animate={{opacity:1}} //animate it to be visible
                    exit={{opacity:0}} //its gonna invincible on exit, gonna fade out
                >
                    <FeedbackItem key={item.id} item={item}
                    handleDelete={handleDelete}/>
                </motion.div>
            ))}
        </AnimatePresence>
        </div>
    )
//   return <div className="feedback-list">
//     {feedback.map((item) => (
//         <FeedbackItem key={item.id} item={item}
//         handleDelete={handleDelete}/>
//     ))}
//   </div>
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    )
}

export default FeedbackList
