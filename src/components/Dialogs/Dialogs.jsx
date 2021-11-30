import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';

const Dialogs = (props) => {

   let state = props.dialogsPage;

   let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key = {dialog.id} id={dialog.id} />);

   let messagesElements = state.messages.map(message => <Message message={message.message} key = {message.id} />);

   let newMessageBody = state.newMessageBody;

   /*let onSendMessageClick = () => {
      props.sendMessage();
   }*/

   let onNewMessageChange = (e) => {
         let body = e.target.value;
         props.updateNewMessageBody(body);
   }

   let addNewMessage = (values) => {
      props.sendMessage(values.newMessageBody); 
   }

   if (!props.isAuth) return <Redirect to={"/Login"} />;
   


   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            {dialogsElements}
         </div>
         <div className={s.messages}>
           <div> {messagesElements} </div>
           <div>
              <AddMessageForm onNewMessageChange = {onNewMessageChange} onSubmit={addNewMessage} />
           </div>
         </div>
      </div>
   );
}

const AddMessageForm = (props) =>{

   const onSubmit = (values) => {
      props.onNewMessageChange(values)
   }

   return(
      <Formik
         initialValues = {{
         newMessageBody:""}} 
         onSubmit = {onSubmit}
      >
         <Form>
            <div> 
               <Field component="textarea" name="newMessageBody" placeholder="Enter your message" />
            </div>
            <div> <button type="send">Send</button> </div>
         </Form>
      </Formik>
   )
}


export default Dialogs;



