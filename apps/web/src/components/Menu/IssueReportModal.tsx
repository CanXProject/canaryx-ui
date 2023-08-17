import React, { useState } from 'react';
import { Flex, Text, Button, Modal } from '@pancakeswap/uikit';
import styled from 'styled-components';



const ReportIssueModalStyled = styled(Modal)`
  z-index: 10000;  
  position: fixed;  
  top: 50%;  
  left: 50%;  
  transform: translate(-50%, -50%);  
  box-shadow: 0px 0px 100px 3000px rgba(0, 0, 0, 0.2);

  // Default size for mobile
  width: 90%;

  // Tablet adjustments
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 70%;
  }

  // Desktop adjustments
  @media (min-width: 1024px) {
    width: 50%;
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  min-height: 120px;
  margin-bottom: 0.25em;
  line-height: 1.4;
  list-style-type: none;
  padding: 10px;
  color: ${({ theme }) => theme.colors.textSlide};
  box-shadow: inset 1px 1px 5px ${({ theme }) => theme.colors.slideShadow}, 
              inset -1px -1px 5px ${({ theme }) => theme.colors.slideBackground1};
  border-radius: 6px;
  border: 0px solid;
  transition: transform 0.3s, box-shadow 0.3s;
`;

const StyledInput = styled.input`
  width: 100%;
  margin-bottom: 0.25em;
  line-height: 1.4;
  padding: 10px;
  color: ${({ theme }) => theme.colors.textSlide};
  box-shadow: inset 1px 1px 3px ${({ theme }) => theme.colors.slideShadow}, 
              inset -1px -1px 3px ${({ theme }) => theme.colors.slideBackground1};
  border-radius: 6px;
  border: 0px solid;
  transition: transform 0.3s, box-shadow 0.3s;
`;

const StyledSelect = styled.select`
  width: 100%;
  line-height: 1.4;
  padding: 6px;
  color: ${({ theme }) => theme.colors.textSlide};
  box-shadow: inset 1px 1px 3px ${({ theme }) => theme.colors.slideShadow}, 
              inset -1px -1px 3px ${({ theme }) => theme.colors.slideBackground1};
  border-radius: 6px;
  border: 0px solid;
  transition: transform 0.3s, box-shadow 0.3s;
`;



const PanelContent = styled.div`
  padding: 30px;
  font-family: 'Poppins', sans-serif;
  color: #ffffff;
  line-height: 1.6;
  background-color: ${({ theme }) => theme.colors.slideOut};
  border-radius: 8px;
`;

const H1 = styled.h2`
  font-size: 1.5em;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.backgroundAlt2};
  margin-bottom: 0.5em;
  padding: 10px;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  box-shadow: inset 2px 2px 5px ${({ theme }) => theme.colors.slideShadow}, 
              inset -2px -2px 5px ${({ theme }) => theme.colors.slideBackground1};
  border-radius: 6px;
  border-left: 4px solid ${({ theme }) => theme.colors.secondary80};
  transition: color 0.3s, transform 0.3s, box-shadow 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
   
  }
`;

const H2 = styled.h3`
  font-size: 1.2em;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5em;
  padding: 10px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  color: ${({ theme }) => theme.colors.primary};
  box-shadow: 1px 1px 2px ${({ theme }) => theme.colors.slideShadow}, 
              -1px -1px 2px ${({ theme }) => theme.colors.slideBackground1};
  border-radius: 6px;
  transition: color 0.3s, transform 0.3s, box-shadow 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    box-shadow: 1px 1px 2px ${({ theme }) => theme.colors.slideShadow}, 
                -1px -1px 2px ${({ theme }) => theme.colors.slideBackground1};
    transform: scale(1.01);
  }
`;

const H3 = styled.h4`
  font-size: 1em;
  color: ${({ theme }) => theme.colors.textSlide};
  margin-bottom: 0.1em;
  padding: 10px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  
  border-radius: 6px;
  transition: color 0.3s, transform 0.3s, box-shadow 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.textSlide};
   
    transform: scale(1.01);
  }
`;

const Blockquote = styled.blockquote`
  margin: 1em 0;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.backgroundAlt2};
  box-shadow: inset 2px 2px 5px ${({ theme }) => theme.colors.slideShadow}, 
              inset -2px -2px 5px ${({ theme }) => theme.colors.slideBackground1};
  border-left: 4px solid ${({ theme }) => theme.colors.failure};
  color: ${({ theme }) => theme.colors.textSlide};
  font-style: italic;
  border-radius: 6px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.01);
    box-shadow: 1px 1px 2px ${({ theme }) => theme.colors.slideShadow}, 
                -1px -1px 2px ${({ theme }) => theme.colors.slideBackground1};
  }
`;

const ListItem = styled.li`
  margin-bottom: 0.25em;
  line-height: 1.4;
  list-style-type: none;
  padding: 10px;
  color: ${({ theme }) => theme.colors.textSlide};
  box-shadow: inset 1px 1px 3px ${({ theme }) => theme.colors.slideShadow}, 
              inset -1px -1px 3px ${({ theme }) => theme.colors.slideBackground1};
  border-radius: 6px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.01);
    box-shadow: 1px 1px 2px ${({ theme }) => theme.colors.slideShadow}, 
                -1px -1px 2px ${({ theme }) => theme.colors.slideBackground1};
  }
`;

const BulletList = styled.ul`
    list-style-type: disc;
    padding-left: 20px;
`;

const IssueReportModal = ({ isOpen, onClose }) => {
  const [showBrowserDetails, setShowBrowserDetails] = useState(false);
  const [hasConsented, setHasConsented] = useState(false);
  // State variables for form inputs
  const [issueDescription, setIssueDescription] = useState('');
  const [affectedURL, setAffectedURL] = useState(window.location.href);
  const [severity, setSeverity] = useState('minor');
  const [issueType, setIssueType] = useState('visualBug');
  const [browser, setBrowser] = useState('chrome');
  const [operatingSystem, setOperatingSystem] = useState('windows');

  const handleSubmit = async () => {
      const formData = {
          issueDescription,
          affectedURL,
          severity,
          issueType,
          browser: showBrowserDetails ? browser : null,
          operatingSystem: showBrowserDetails ? operatingSystem : null
      };

      try {
        // sending the form data to the server
        const response = await fetch('https://reporter-two.vercel.app/api/report-issue', { 

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        // Handle success 
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // If you don't expect a JSON response from the server, you can comment out the next line
        // const data = await response.json();
    
        // Display a success message
        alert('Issue reported successfully!');
        onClose();
    } catch (error) {
        // Handle the error
        alert('There was an error reporting the issue. Please try again later.');
        console.error('Error reporting issue:', error);
    }
};

  return (
      <PanelContent>
          <ReportIssueModalStyled title="Issue Report form" onDismiss={onClose}>
              <H2>Report an Issue</H2>
              <Blockquote>
                  <Text>
                      Please do not share any personal, private, or sensitive information in this report.
                  </Text>
              </Blockquote>
              <H3>Describe the issue:</H3>
              <StyledTextarea
                  placeholder="Describe the issue..."
                  value={issueDescription}
                  onChange={(e) => setIssueDescription(e.target.value)}
              />



            <H3>Affected URL:</H3>
            <StyledInput
                type="text"
                value={affectedURL}
                onChange={(e) => setAffectedURL(e.target.value)}
                style={{ width: '100%', marginBottom: '10px' }}
            />

            <H3>Severity:</H3>
            <StyledSelect
                value={severity}
                onChange={(e) => setSeverity(e.target.value)}
                style={{ width: '100%', marginBottom: '10px' }}
            >
                <option value="minor">Minor</option>
                <option value="moderate">Moderate</option>
                <option value="major">Major</option>
                <option value="critical">Critical</option>
            </StyledSelect>

            <H3>Issue Type:</H3>
            <StyledSelect
                value={issueType}
                onChange={(e) => setIssueType(e.target.value)}
                style={{ width: '100%', marginBottom: '10px' }}
            >
                <option value="visualBug">Visual Bug</option>
                <option value="functionalBug">Functional Bug</option>
                <option value="performanceIssue">Performance Issue</option>
                <option value="contentError">Content Error</option>
            </StyledSelect>

            {/* Using Flex to align items on the same line */}
            <Flex alignItems="center" mb="8px">
                <H3>Would you like to include browser and OS details? (optional)</H3>
                <input type="checkbox" onChange={(e) => setShowBrowserDetails(e.target.checked)} />
            </Flex>


            {showBrowserDetails && (
                <>
                    <H3>Browser:</H3>
                    <StyledSelect
                        value={browser}
                        onChange={(e) => setBrowser(e.target.value)}
                        style={{ width: '100%', marginBottom: '10px' }}
                    >
                        {/* List of common browsers. Add more if needed */}
                        <option value="chrome">Chrome</option>
                        <option value="firefox">Firefox</option>
                        <option value="safari">Safari</option>
                        <option value="edge">Edge</option>
                    </StyledSelect>

                    <H3>Operating System:</H3>
                    <StyledSelect
                        value={operatingSystem}
                        onChange={(e) => setOperatingSystem(e.target.value)}
                        style={{ width: '100%', marginBottom: '10px' }}
                    >
                        {/* List of common operating systems. Add more if needed */}
                        <option value="windows">Windows</option>
                        <option value="mac">Mac OS</option>
                        <option value="linux">Linux</option>
                        <option value="android">Android</option>
                        <option value="ios">iOS</option>
                    </StyledSelect>
                </>
            )}

            <Button mt="16px" onClick={handleSubmit} type="button">
                Submit
            </Button>
        </ReportIssueModalStyled></PanelContent>
    );
};

export default IssueReportModal;
