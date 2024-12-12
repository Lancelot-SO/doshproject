import React, { useState, useEffect } from "react";
import logo from "../images/dashboard/dash_logo.png";
import { ChevronRight, ChevronLeft } from "lucide-react";

const MenuLinks = ({ onMenuClick }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null); // Track the active menu
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const toggleMenu = () => {
        setIsExpanded(!isExpanded);
    };

    const handleMenuClick = (menu) => {
        setActiveMenu(menu); // Set the clicked menu as active
        onMenuClick(menu); // Call the parent function
        if (isMobile) {
            setIsExpanded(false); // Collapse the menu on mobile after selection
        }
    };

    return (
        <div className="relative">
            <div
                className={`flex items-center bg-black text-white rounded-lg overflow-hidden transition-all duration-300 mx-4 relative`}
                style={{
                    width: isExpanded
                        ? isMobile
                            ? "95%" // Increased width for mobile when expanded
                            : "760px"
                        : isMobile
                            ? "150px" // Increased default width for mobile when collapsed
                            : "140px",
                    height: isMobile ? "auto" : "40px",
                    flexDirection: isMobile && isExpanded ? "column" : "row",
                    alignItems: isMobile && isExpanded ? "flex-start" : "center",
                }}
            >
                {/* Logo and Title */}
                <div
                    className="flex items-center p-2"
                    style={{ width: isMobile ? "100%" : isExpanded ? "auto" : "140px" }}
                >
                    <img src={logo} alt="DOSH Logo" className="w-5 h-5 mr-2" />
                    <span className="text-white text-[12px]">DOSH Menu</span>
                </div>

                {/* Expanded Menu Options */}
                {isExpanded && (
                    <div
                        className={`flex ${isMobile ? "flex-col space-y-2 w-full p-2" : "space-x-4 ml-4"
                            } whitespace-nowrap text-[12px]`}
                    >
                        {[
                            "DOSH Insurance",
                            "DOSH Financial",
                            "DOSH Risk",
                            "DOSH Ride",
                            "DOSH Commerce",
                        ].map((menu) => (
                            <button
                                key={menu}
                                onClick={() => handleMenuClick(menu)}
                                className={`text-white text-[12px] hover:bg-[#A2865F] p-1 rounded ${activeMenu === menu ? "bg-[#A2865F]" : ""
                                    } ${isMobile ? "w-full text-left" : ""}`}
                            >
                                {menu}
                            </button>
                        ))}
                    </div>
                )}

                {/* Toggle Icon */}
                <div
                    onClick={toggleMenu}
                    className={`absolute ${isMobile
                        ? "top-1 right-2"
                        : "top-[50%] transform -translate-y-1/2 right-0"
                        } bg-[#A2875F] w-[30px] h-[30px] rounded-lg flex items-center justify-center cursor-pointer`}
                    style={{
                        background:
                            "linear-gradient(230.04deg, #A2875F 2.11%, #462D0B 102.63%)",
                    }}
                >
                    {isExpanded ? (
                        <ChevronLeft size={16} className="text-white" />
                    ) : (
                        <ChevronRight size={16} className="text-white" />
                    )}
                </div>
            </div>
        </div>
    );
};

export default MenuLinks;
