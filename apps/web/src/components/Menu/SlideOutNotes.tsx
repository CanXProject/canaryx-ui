// Import necessary dependencies
import styled, { ThemeContext } from 'styled-components'
import React, { useState, useEffect, useContext } from 'react'
import SlideOutTriggerNotes from './SlideOutTriggerNotes'
import SlidePanelSettings from './SlidePanelSettings'

// Define a styled component for the content of the panel
// This will allow you to add styling to the content easily
const PanelContent = styled.div`
    padding: 20px; /* Add padding to content */
    font-family: 'Poppins', sans-serif;
    color: ${props => props.theme.colors.text};
    line-height: 1.6;
    background-color: ${props => props.theme.colors.background};
`;

// Define a styled component for the H1s
const H1 = styled.h2`
    font-size: 1.5em;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 0.5em;
    border-bottom: 1px solid ${props => props.theme.colors.secondary};
`;

// Define a styled component for the list items
const ListItem = styled.li`
    margin-bottom: 0.25em;
    line-height: 1.4;
`;


// Define the types of props our styled component will receive
type StyledPanelContainerProps = {
    isOpen: boolean,
}

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
    box-shadow: ${props => props.isOpen ? `1px 25px 50px 0px ${props.theme.colors.shadow}` : "none"};
    z-index: 999; // Set an appropriate value to ensure the panel appears above other elements


    /* Add media queries for mobile */
    @media (max-width: 768px) {
        width: 80vw; // Width on mobile devices
        right: ${props => props.isOpen ? "0" : "-80vw"}; // Position on mobile devices
    }
`;

const SlideOutNotes = () => {
    // Define state variable to track whether the panel is open
    const [isOpen, setIsOpen] = useState(false)

    // Define function to handle clicks outside the panel
    // This will close the panel if a click is detected outside
    const handleClickOutside = (event) => {
      if (event.target.closest(".slide-out-content")) {
        return
      }
      setIsOpen(false)
    }
  
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
                    top: "25%",
                    transform: "translateY(-0%)",
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
                    <SlideOutTriggerNotes onClick={() => setIsOpen(!isOpen)} />
                </div>
            </div>
            
            {/* Panel container */}
            {/* Here, we use the StyledPanelContainer and pass isOpen and theme as props */}
            <StyledPanelContainer isOpen={isOpen} theme={theme}>
                {/* Panel content */}
                {/* The panel content is only rendered when the panel is open */}
                {isOpen && (
                    
                <PanelContent>
                <H1>CanaryX Swap Notifications: Real-Time Updates</H1>
                <p>Welcome to the CanaryX Swap Notification Center, the hub for all real-time updates and key information.</p>
                <br />

                <H1>Progress: UI Enhancements</H1>
                <p>Our user interface is undergoing a gradual makeover for a smoother experience. Noticed some changes? There's more to come!</p>
                <br />

                <H1>In the Works: Price Charts</H1>
                <p>We're busy crafting comprehensive price charts for an in-depth market overview. We'll let you know once it's ready!</p>
                <br />

                <H1>On the Horizon: Popup Notifications</H1>
                <p>We're working on popup guides to make navigating our DEX even easier. These mini tutorials will walk you through our features for a seamless trading experience.</p>
                <br />

                <H1>Safety Alert: Verify Information</H1>
                <p>Trading safety is a priority. Always double-check addresses and URLs. Let's make your trading journey secure.</p>
                <br />
                
                <H1>Your Update Center: Accessible Anytime!</H1>
                <p>This Notification Center is at your fingertips on every page of our DEX. No sign-ups, no fuss, just timely CanaryX Swap updates and news.</p>
                </PanelContent>

                )}
            </StyledPanelContainer>
        </>
    )
}

export default SlideOutNotes
