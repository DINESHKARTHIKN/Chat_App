// import { MessageSquare } from "lucide-react";

// const NoChatSelected = () => {
//   return (
//     <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
//       <div className="max-w-md text-center space-y-6">
//         {/* Icon Display */}
//         <div className="flex justify-center gap-4 mb-4">
//           <div className="relative">
//             <div
//               className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center
//              justify-center animate-bounce"
//             >
//               <MessageSquare className="w-8 h-8 text-primary " />
//             </div>
//           </div>
//         </div>

//         {/* Welcome Text */}
//         <h2 className="text-2xl font-bold">Welcome to Chatty!</h2>
//         <p className="text-base-content/60">
//           Select a conversation from the sidebar to start chatting
//         </p>
//       </div>
//     </div>
//   );
// };

// export default NoChatSelected;

import { MessageSquare } from "lucide-react";
import "./NoChatSelected.css"; // Ensure this import is correct based on your file structure

const NoChatSelected = () => {
  return (
    <div className="no-chat-selected-container">
      <div className="no-chat-selected-content">
        {/* Icon Display */}
        <div className="no-chat-selected-icon-container">
          <div className="no-chat-selected-icon">
            <MessageSquare className="no-chat-selected-icon-svg" />
          </div>
        </div>

        {/* Welcome Text */}
        <h2 className="no-chat-selected-title">Welcome to Chatty!</h2>
        <p className="no-chat-selected-text">
          Select a conversation from the sidebar to start chatting
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;
