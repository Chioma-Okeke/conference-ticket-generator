import { useState } from "react";
import Select from "./shared/Select";
import Button from "./shared/Button";
import PropTypes from "prop-types";

const availableTickets = [
    {
        fee: "Free",
        accessType: "REGULAR ACCESS",
        date: "20/52",
    },
    {
        fee: "$150",
        accessType: "VIP ACCESS",
        date: "20/52",
    },
    {
        fee: "$150",
        accessType: "VVIP ACCESS",
        date: "20/52",
    },
];

function Events({ setStepCounter }) {
    const [selectedTicket, setSelectedTicket] = useState({});

    return (
        <section className="text-[#FAFAFA] flex flex-col gap-8 mx-auto lg:p-6 max-w-[604px] rounded-[32px] lg:border border-[#0E464F] lg:bg-[#08252B]">
            <div className="flex flex-col items-center sm:h-[243px] lg:h-auto justify-between lg:justify-start gap-8 lg:gap-2 relative py-4 px-6 lg:p-6 rounded-3xl border border-l-2 border-r-2 border-b-2 border-[#07373F] bg-[#0A0C11]/10 bg-[radial-gradient(circle_at_top_left,_#24A0B533,_transparent)]">
                <div className="flex flex-col gap-2">
                    <h1 className="text-center text-3xl sm:text-5xl lg:text-[62px] font-roadRage leading-[62px] ">
                        Techember Fest ”25
                    </h1>
                    <p className="text-center text-sm lg:text-base max-w-[340px] font-roboto">
                        Join us for an unforgettable experience at [Event Name]!
                        Secure your spot now.
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row gap-1 lg:gap-4 items-center text-sm sm:text-base">
                    <span>📍 [Event Location]</span>
                    <span className="hidden lg:block">| |</span>
                    <span>March 15, 2025 | 7:00 PM</span>
                </div>
            </div>
            <hr className="h-1 w-full border-[#07373F]" />
            <div className="flex flex-col gap-2">
                <p>Select Ticket Type:</p>
                <div className="grid lg:grid-cols-3 gap-8 lg:gap-0 bg-[#052228] border border-[#07373F] p-4 rounded-3xl">
                    {availableTickets.map((ticket, index) => {
                        return (
                            <button
                                onClick={() => setSelectedTicket(ticket)}
                                className={`lg:max-w-[158px] p-3 border-2 border-[#197686] rounded-xl flex flex-col gap-3 transition-colors ease-in-out duration-300 cursor-pointer hover:bg-[#12464E] ${
                                    selectedTicket.accessType ===
                                    ticket.accessType
                                        ? "bg-[#12464E]"
                                        : "bg-transparent"
                                }`}
                                key={index}
                            >
                                <p className="font-semibold text-2xl leading-[26.4px] text-white">
                                    {ticket.fee}
                                </p>
                                <div className="text-start">
                                    <p>{ticket.accessType}</p>
                                    <p className="text-[#D9D9D9] text-sm leading-[21px]">
                                        {ticket.date}
                                    </p>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <p>Number of Tickets</p>
                <div>
                    <Select options={[1, 2, 3, 4, 5, 6, 7, 8]} />
                </div>
            </div>
            <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-6">
                <Button className="flex-1 border border-[#24A0B5] rounded-lg">
                    Cancel
                </Button>
                <Button
                    onClick={() => setStepCounter(2)}
                    className="flex-1 bg-[#24A0B5] rounded-lg text-white"
                >
                    Next
                </Button>
            </div>
        </section>
    );
}

Events.propTypes = {
    setStepCounter: PropTypes.func,
};

export default Events;
