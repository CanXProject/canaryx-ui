// Import necessary dependencies
import {
    CloseIcon, Flex,
    Text,
    ThemeSwitcher,
    QuestionHelper,
    Toggle, Checkbox,
    Button,

} from '@pancakeswap/uikit'

import styled, { ThemeContext } from 'styled-components'
import React, { useState, useEffect, useContext } from 'react'
import SlideOutPanelTrigger from './SlideOutPanelTrigger'
import SlidePanelSettings from './SlidePanelSettings'
import IssueReportModal from './IssueReportModal';

// Define a styled component for the content of the panel
// This will allow you to add styling to the content easily
const PanelContent = styled.p`
    padding: 20px; /* Add padding to content */
`;

// Define the types of props our styled component will receive
type StyledPanelContainerProps = {
    isOpen: boolean,
}


const RealisticCloseIcon = styled(CloseIcon)`
  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.2));
  background: linear-gradient(145deg, #e6e6e6, #ffffff);
  backdrop-filter: blur(5px); // This will blur the content behind the modal
  border-radius: 15%;
  padding: 4px;
  box-shadow: 5px 5px 15px #aaaaaa50, -5px -5px 15px #ffffff50;
`;


// Define a styled component for the panel container
// This allows you to add styling directly to the container and also use media queries
// The container changes position and width based on whether the panel is open and the size of the viewport
const StyledPanelContainer = styled.div<StyledPanelContainerProps>`
    position: fixed;
    right: ${props => props.isOpen ? "0" : "-40vw"}; // Open: appear from right, Closed: move to right
    top: 10%; // Vertical positioning from top
    width: 40vw; // Width as a percentage of viewport width
    height: auto; // Height as a percentage of viewport height
    background-color: ${props => props.theme.colors.backgroundDisabled}; // Background color from theme
    transition: right 0.5s; // Transition effect for the slide
    border-radius: 10px; // Rounded corners
    box-shadow: ${props => props.isOpen ? `4px 1px 35px 1px ${props.theme.colors.shadow}` : "none"};
    overflow: auto; /* Add a scrollbar when the content overflows */
    max-height: 70vh; /* Set a max height. Adjust this value as needed */
    z-index: 999; // Set an appropriate value to ensure the panel appears above other elements
    

    /* Add media queries for mobile */
    @media (max-width: 768px) {
        width: 80vw; 
        right: ${props => props.isOpen ? "0" : "-80vw"}; 
        transition: right 0.5s;
    }
`;

const SlideOutPanel = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);




    // Define function to handle clicks outside the panel
    // This will close the panel if a click is detected outside
    const handleClickOutside = (event) => {
        // If the clicked target is inside the slide-out panel (`.slide-out-content`), then exit the function
        if (event.target.closest(".slide-out-content")) {
            return;
        }
        setIsOpen(false);
    };


    // Add event listener for clicks when the panel is open
    // Remove listener when panel is closed or when the component unmounts
    useEffect(() => {
        if (isOpen) {
            document.addEventListener("click", handleClickOutside)
        }
        return () => {
            document.removeEventListener("click", handleClickOutside)
        }
    }, [isOpen])

    // Access the theme object from the ThemeContext
    const theme = useContext(ThemeContext);

    return (
        <>
            {/* Trigger container */}
            <div
                style={{
                    position: "fixed",
                    right: isOpen ? "40vw" : "0",
                    top: "20%",
                    transition: "right 0.5s"
                }}
            >
                {/* Trigger */}
                <div
                    style={{
                        position: "relative",
                        width: "48px",
                        height: "48px"
                    }}
                >
                    {/* This component triggers opening and closing of the panel */}
                    <SlideOutPanelTrigger onClick={() => setIsOpen(!isOpen)} />
                </div>
            </div>

            {/* Panel container */}
            <StyledPanelContainer isOpen={isOpen} theme={theme} className="slide-out-content">
                {/* Close button at the top-right of the panel */}
                <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                >
                    <RealisticCloseIcon width="24px" height="24px" />
                </button>

                {/* Panel content */}
                {isOpen && (
                    <>
                        <PanelContent>
                            <SlidePanelSettings />
                        </PanelContent>

                        {/* Button inside the SlideOutPanel to open the modal */}
                        <Button onClick={openModal} type="button" style={{ margin: '20px' }}>
                            Report an Issue
                        </Button>
                    </>
                )}
            </StyledPanelContainer>



            {/* The modal */}
            {isModalOpen && (
                <>


                    <IssueReportModal isOpen={isModalOpen} onClose={closeModal} /></>


            )}
        </>
    )
}

export default SlideOutPanel;