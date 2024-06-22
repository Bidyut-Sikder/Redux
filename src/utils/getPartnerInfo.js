
export const getPartnerInfo = (participants, email) => {
    //it takes user's email and gives the participant's email from the array
    return participants.find((participant) => participant.email !== email);

}

























