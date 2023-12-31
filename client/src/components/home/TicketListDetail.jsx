/* eslint-disable react/prop-types */
import { useContext } from "react";
import { useModal } from "../../context/ModalContext";
import { UserContext } from "../../context/UserContext";

import { API } from "../../config/api";
import { useMutation } from "react-query";

import SelectTicket from "./SelectTicket";
import Login from "../modal/Login";
import moment from "moment";

import Arrow from "../../assets/images/arrow.svg";

export default function TicketListDetail({ ticket }) {
  const { openModal } = useModal();
  const [state] = useContext(UserContext);

  const handleSelectTicket = () => {
    openModal(<SelectTicket />);
  };

  const handleShowLogin = () => {
    openModal(<Login />);
  };

  const transaction = {
    ticket_id: ticket.id,
    status: "pending",
  };

  const mutationFunction = async () => {
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await API.post("/transaction", transaction);
      handleSelectTicket();
    } catch (error) {
      console.log("error catch: ", error);
    }
  };

  const handleDivClick = useMutation(mutationFunction);

  const handleClick = (e) => {
    e.preventDefault();
    if (state.isLogin) {
      handleDivClick.mutate();
    } else {
      handleShowLogin();
    }
  };

  const startMoment = moment(ticket.start_time, "HH:mm:ss");
  const arrivalMoment = moment(ticket.arrival_time, "HH:mm:ss");
  const duration = moment.duration(arrivalMoment.diff(startMoment)).humanize();

  return (
    <div>
      <div
        className="h-[6.25rem] w-[79.7rem] mx-auto border-2 border-slate-300 mb-[2.5rem] cursor-pointer hover:scale-[102%] transition-transform duration-500 hover:ring-2 hover:ring-pink-400 hover:border-pink-500 hover:drop-shadow-lg hover:shadow-md"
        onClick={handleClick}
      >
        <div className="ml-[75px] mt-7">
          <div className="mb-10 grid grid-cols-[1fr_1fr_1fr_1fr_1.5fr_1.5fr]">
            <div className="flex-row items-center justify-center">
              <p className="font-bold">{ticket.name_train}</p>
              <p className="text-slate-400 text-xs">{ticket.type_train}</p>
            </div>
            <div className="flex-row items-center justify-center text-center">
              <p className="font-bold">{ticket.start_time}</p>
              <p className="text-slate-400 text-xs">{ticket.start_station.name}</p>
            </div>
            <div className="flex items-center justify-center">
              <img src={Arrow} alt="arrow" />
            </div>
            <div className="flex-row items-center justify-center text-center">
              <p className="font-bold">{ticket.arrival_time}</p>
              <p className="text-slate-400 text-xs">{ticket.destination_station.name}</p>
            </div>
            <div className="flex items-center justify-center text-center">
              <p className="font-bold">{duration}</p>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-center font-bold text-pink-500">Rp. {ticket.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
