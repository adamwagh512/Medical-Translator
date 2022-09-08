const { User, Account, Med, Allergy, History, Contact, Surgery, Physician, Pain, Emergency } = require('../models');
const deepl = require('deepl-node');
const authKey = "d9784efc-0947-0fb2-3e1d-9e4d38fd1151:fx"
const translator = new deepl.Translator(authKey);

const resolvers = {
    Query: {
        Allergies: async() => {
            return Allergy.find({})
        },

        //find all meds
        Meds: async() => {
            return Med.find({})
        },
        //find all users and populate all the associated meds, allergies for each user
        Users: async () => {
            return User.find({}).populate(['Meds', 'Allergies','Contact','Physician','History','Surgery', 'Pain', 'Emergency'])

            // return User.find({}).populate('Meds').populate('Allergies').populate('Contact').populate('Physician').populate('History').populate('Surgery');
        },
        //find all accounts and populate all the associated users for each account
        Account: async () => {
            return Account.find({}).populate('Users').populate({
                path: 'Users',
                populate:['Meds', 'Allergies', 'Contact', 'Physician', 'History','Surgery', 'Pain', 'Emergency'],
            });
        },
        findSingleUser: async (parent, { UserId }) => {
            return Profile.findOne({ _id: UserId });
          },
        me: async (parent, args, context) => {
            return Profile.findOne({_id:context.user._id})
        },
        login: async (parent, { email, password }) => {
            const profile = await Profile.findOne({ email });
      
            if (!profile) {
              throw new AuthenticationError('No profile with this email found!');
            }
      
            const correctPw = await profile.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect password!');
            }
      
            const token = signToken(profile);
            return { token, profile };
          },
    },
    Mutation: {
// Account Mutations
        // Make a new Account
        //works
        createAccount: async (parent, {email, password}) => {
            return Account.create({email: email, password: password});
        },

        // Delete an Account 
        //not working yet
        deleteAccount: async (parent, {_id}) => {
            return Account.findOneAndDelete({_id})
        },

// User Mutations
        //Create a new user
        //works
        createUser: async (parent, {firstName, lastName, DOB, smoker, _id}) => {
            const newUser = await User.create({firstName, lastName, DOB, smoker})
            return await Account.findByIdAndUpdate(
                { _id }, 
                { $push: { Users: newUser } },
                {new:true}
            )
        },
        // Deletes a User
        //works
        deleteUser: async (parent, {_id}) => {
            return  User.findOneAndDelete(
                 { _id}, 
             )
         },
     
// Med Mutations
        //Create a new med
        //Works
        createMed: async (parent, {medName, dose, unit, _id}) => {
            const medication = await Med.create({medName, dose, unit})
           return await User.findOneAndUpdate(
                { _id }, 
                { $push: { Meds: medication } },
                {new:true}
            )
        },
        //Deletes a med
       //works 
        deleteMed: async (parent, {_id}) => {
           return  Med.findOneAndDelete(
                { _id}, 
            )
        },
// Allergy Mutations 
        //create an allergy and assign it to user by ID
        //works
        createAllergy: async (parent, {allergin, reaction, _id}) => {
            const newAllergy = await Allergy.create({allergin, reaction})
           return await User.findOneAndUpdate(
                { _id }, 
                { $push: { Allergies: newAllergy } },
                {new:true}
            )
        },
        // deletes an Allergy
        //works
        deleteAllergy: async (parent, {_id}) => {
            return  Allergy.findOneAndDelete(
                 { _id}, 
             )
         },
//Contact Mutations
        //Create emergency contact and assign it to user by ID
        //works
        createContact: async (parent, {name, email, phone, _id}) => {
            const newContact = await Contact.create({name, email, phone})
           return await User.findOneAndUpdate(
                { _id }, 
                { $push: { Contact: newContact } },
                {new:true}
            )
        },
        //deletes a contact
        //works
        deleteContact: async (parent, {_id}) => {
            return  Contact.findOneAndDelete(
                 { _id}, 
             )
         },
// Physician Mutations
        //Create a physician contact and assign it to user by ID
        //works
        createPhysician: async (parent, {name, speciality, email, phone, _id}) => {
            const newPhysician = await Physician.create({name, speciality, email, phone})
           return await User.findOneAndUpdate(
                { _id }, 
                { $push: { Physician: newPhysician } },
                {new:true}
            )
        },
        // Deletes a physician
        //works
        deletePhysician: async (parent, {_id}) => {
            return  Physician.findOneAndDelete(
                 { _id}, 
             )
         },
//History Mutations
        //Create a History item and assign it to user by ID
        //works
        createHistory: async (parent, {issue, _id}) => {
            const newHistory = await History.create({issue})
           return await User.findOneAndUpdate(
                { _id }, 
                { $push: { History: newHistory } },
                {new:true}
            )
        },
        //delete History
        //works
        deleteHistory: async (parent, {_id}) => {
            return  History.findOneAndDelete(
                 { _id}, 
             )
         },
//Surgery Mutations
         //create a surgury item and assign it to a user by ID
         //works
        createSurgery: async (parent, {description, date, hospital, hospitalCity, surgeon, _id}) => {
            const newSurgery = await Surgery.create({description, date, hospital, hospitalCity, surgeon})
           return await User.findOneAndUpdate(
                { _id }, 
                { $push: { Surgery: newSurgery } },
                {new:true}
            )
        },
        //delete a surgery
        //works
        deleteSurgery: async (parent, {_id}) => {
            return  Surgery.findOneAndDelete(
                 { _id}, 
             )
         },
// Pain Mutations
         //Create a pain assessment item and assign it to a user by ID
         //works
        createPain: async (parent, {onset, provocation, quality, location, severity, timing, _id}) => {
            const newPain = await Pain.create({onset, provocation, quality, location, severity, timing})
           return await User.findOneAndUpdate(
                { _id }, 
                { $push: { Pain: newPain } },
                {new:true}
            )
        },
        //delete pain assessment
        //works
        deletePain: async (parent, {_id}) => {
            return  Pain.findOneAndDelete(
                 { _id}, 
             )
         },
//Emergency Mutations
         //Create an emergency item and assign it to a user by ID
         //works
        createEmergency: async (parent, {currentProblem, _id}) => {
            const newEmergency = await Emergency.create({currentProblem})
           return await User.findOneAndUpdate(
                { _id }, 
                { $push: { Emergency: newEmergency } },
                {new:true}
            )
        },
        //delete an emergency event
        //works
        deleteEmergency: async (parent, {_id}) => {
            return  Emergency.findOneAndDelete(
                 { _id}, 
             )
         },
         translateText: async (parent, {words, translateFrom, translateTo}) => {
            try {
                const translatedText = await translator.translateText(
                    words,
                    translateFrom,
                    translateTo,
                );
                console.log(translatedText.text)
                return {
                    input: words,
                    translateFrom,
                    translateTo,
                    translatedWords: translatedText.text
                };
            } catch (error) {
                // If the error occurs after the document was already uploaded,
                // documentHandle will contain the document ID and key
                if (error.documentHandle) {
                    const handle = error.documentHandle;
                    console.log(`Document ID: ${handle.documentId}, ` + `Document key: ${handle.documentKey}`);
                } else {
                    console.log(`Error occurred during document upload: ${error}`);
                }
            }
            
         }
    },
};

module.exports = resolvers;