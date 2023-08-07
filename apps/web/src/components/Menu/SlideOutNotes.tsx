// Import necessary dependencies
import styled, { ThemeContext } from 'styled-components'
import React, { useState, useEffect, useContext } from 'react'
import SlideOutTriggerNotes from './SlideOutTriggerNotes'
import SlidePanelSettings from './SlidePanelSettings'

// Define a styled component for the content of the panel
// This will allow you to add styling to the content easily
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
  font-size: 1.1em;
  color: ${({ theme }) => theme.colors.textSlide};
  margin-bottom: 0.5em;
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
    box-shadow: ${props => props.isOpen ? `4px 1px 35px 1px ${props.theme.colors.shadow}` : "none"};
    overflow: auto; /* Add a scrollbar when the content overflows */
    max-height: 70vh; /* Set a max height. Adjust this value as needed */
    z-index: 999; // Set an appropriate value to ensure the panel appears above other elements


    /* Add media queries for mobile */
    @media (max-width: 768px) {
        width: 80vw; // Width on mobile devices
        right: ${props => props.isOpen ? "0" : "-80vw"}; // Position on mobile devices
    }
`;


// Define content for different pages
const pageContents = {
  swap: (
    <>
      <PanelContent>
        <H1>Understanding the Swap Page</H1>
        <br />

        <H2>What is a Token Swap?</H2>
        <ListItem>A token swap is the process of exchanging one cryptocurrency for another in a decentralized manner. It is one of the main functionalities of a decentralized exchange (DEX).</ListItem>
        <br />

        <H2>Why Swap Tokens?</H2>
        <ListItem>Token swaps allow you to diversify your portfolio, participate in new tokens, or acquire more of a token you believe in. Swapping is an essential part of participating in the decentralized economy.</ListItem>
        <br />

        <H2>How does it work?</H2>
        <ListItem>On this page, you can select the token you wish to swap from, and the token you wish to swap to. Once you input the amount, the DEX will display the estimated amount you will receive after the swap. The swap occurs based on the liquidity and price available in the respective liquidity pool.</ListItem>
        <br />

        <H2>What do I need to be aware of?</H2>
        <ListItem>Before making a swap, ensure you understand the potential slippage, which can result in receiving less than the expected amount due to price changes. Additionally, make sure you have enough tokens in your wallet to cover any transaction or gas fees.</ListItem>
        <br />

        <H2>Notice for Tokens with Transfer Taxes</H2>
        <ListItem>Some tokens, like CNYX, include a transfer tax on transactions. When swapping such tokens, you may need to adjust the slippage tolerance higher to account for this tax. Failure to do so may result in the transaction not going through.</ListItem>
        <br />

        <Blockquote>
          <H3>Remember, as with all crypto transactions, do your due diligence before swapping tokens:</H3>
          <br />
          Verify the contract address of the token you&apos;re about to swap.
          <br />
          Ensure you have a firm understanding of transaction fees, slippage, and any transfer taxes.
          <br />
          Make sure to double-check all transaction details before confirming.
          <br />
        </Blockquote>
        <br /><br />

        <H1>CanaryX Swap Notifications: Real-Time Updates</H1>
        <br />

        <H2>Welcome to the CanaryX Swap Notification Center</H2>
        <ListItem>This is your hub for all real-time updates and key information.</ListItem>
        <br />

        <H2>Progress: UI Enhancements</H2>
        <ListItem>Our user interface is undergoing a gradual makeover for a smoother experience. Noticed some changes? There is more to come!</ListItem>
        <br />

        <H2>In the Works: Price Charts</H2>
        <ListItem>We are busy crafting comprehensive price charts for an in-depth market overview. We&apos;ll let you know once it&apos;s ready!</ListItem>
        <br />

        <H2>On the Horizon: Popup Notifications</H2>
        <ListItem>We are working on popup guides to make navigating our DEX even easier. These mini tutorials will walk you through our features for a seamless trading experience.</ListItem>
        <br />

      </PanelContent>



    </>
  ),
  pools: (
    <>
      <PanelContent>
        <H1>Navigating the Pools Page</H1>
        <br />

        <H2>Why?</H2>
        <ListItem>Because you&apos;re not just an observer, you&apos;re a player in the game of digital finance. You crave opportunities, you&apos;re a pioneer of new frontiers.</ListItem>
        <br />
        <H2>How?</H2>
        <ListItem><H3>It&apos;s simpler than you think:</H3>
          By becoming a beekeeper in the world of CanaryX. This involves acquiring CANARY tokens (your bees), choosing a suitable pool (colony), and then staking your tokens (letting your bees work and produce honey). The honey represents the rewards you can earn over time.</ListItem>
        <br />
        <H2>So what are the steps to follow?</H2><br />
        <ListItem><H3>Setting Up the Hive (Your Wallet):</H3> Set up a digital wallet compatible with the Songbird network, ensuring it supports CANARY tokens.</ListItem><br />
        <ListItem><H3>Getting Your Bees (Buying Tokens):</H3> Purchase some CANARY tokens from a suitable marketplace and transfer them to your wallet.</ListItem><br />
        <ListItem><H3>Finding the Right Farm (CanaryX Pools Page):</H3> Head over to the CanaryX website and find the &ldquo;Pools&rdquo; page.</ListItem><br />
        <ListItem><H3>Choosing the Right Colony (Picking a Pool):</H3> Select a pool that fits your risk tolerance and expected return, keeping in mind each pool may offer different APRs.</ListItem><br />
        <ListItem><H3>Letting Your Bees Do the Work (Staking Tokens):</H3> Stake your CANARY tokens in the chosen pool, letting them work and produce rewards for you.</ListItem><br />
        <ListItem><H3>Collecting Honey (Earning Rewards):</H3> Over time, your staked tokens will earn rewards. You can claim these rewards and add them to your wallet at your convenience.</ListItem>
        <br />

        <Blockquote>
          <H3>Remember, while you&apos;re participating in this decentralized finance revolution and potentially earning rewards, there are risks:</H3>
          <br />
          Disease Outbreak (Smart Contract Risk): A bug or vulnerability in the staking pool&rsquo;s smart contract could result in the loss of your staked tokens.
          <br />
          Fluctuating Honey Prices (Market Risk): The value of your CANARY tokens and your rewards may decrease due to market fluctuations.
          <br />
          Swarming (Rug Pulls): In rare cases, the pool&rsquo;s creators could abscond with all staked tokens.
        </Blockquote>
      </PanelContent>
    </>
  ),
  farms: (
    <>
      <PanelContent>
        <H1>Navigating the Farms Page</H1>
        <br />

        <H2>Why?</H2>
        <ListItem>Because you&apos;re not just a bystander, you&apos;re a farmer in the field of digital finance. You&apos;re interested in reaping rewards from your active participation and efforts.</ListItem>
        <br />
        <H2>How?</H2>
        <ListItem><H3>It&apos;s easier than you think:</H3>
          You become a farmer by planting your LP tokens (seeds) in one of the CanaryX farms (fields). These seeds grow over time, producing CANARY tokens (crops) that you can harvest as rewards.</ListItem>
        <br />
        <H2>What are the steps to follow?</H2><br />
        <ListItem><H3>Prepare Your Seeds (Getting LP Tokens):</H3> After providing liquidity to a pool on the &ldquo;Add Liquidity&rdquo; page, you receive LP tokens which are your seeds for farming.</ListItem><br />
        <ListItem><H3>Find a Suitable Field (CanaryX Farms Page):</H3> Navigate to the CanaryX Farms page on the website.</ListItem><br />
        <ListItem><H3>Plant Your Seeds (Staking LP Tokens):</H3> Select a farm that suits your preferences and stake your LP tokens. The seeds will begin to grow over time.</ListItem><br />
        <ListItem><H3>Harvest Your Crops (Collecting Rewards):</H3> After some time, you can collect your rewards (CANARY tokens) that have been produced by your seeds (LP tokens).</ListItem>
        <br />

        <Blockquote>
          <H3>Remember, while you&apos;re participating in this decentralized finance revolution and potentially earning rewards, there are risks:</H3>
          <br />
          Pest Invasion (Smart Contract Risk): A bug or vulnerability in the farm&apos;s smart contract could result in the loss of your staked LP tokens.
          <br />
          Unpredictable Weather (Market Risk): The value of your LP tokens and your rewards may decrease due to market fluctuations.
          <br />
          Infertile Fields (Rug Pulls): In rare cases, the creators of the farm could drain all staked tokens.
          <br />
          Slow Growth: The yield of your farm may not always match your expectations due to changes in the network conditions.
        </Blockquote>
      </PanelContent>

    </>
  ),
  liquidity: (
    <>
      <PanelContent>
        <H1>Navigating the Liquidity Page</H1>
        <br />

        <H2>Why?</H2>
        <ListItem>Because you&apos;re not just a passenger, you&apos;re a significant contributor to the ride-sharing ecosystem of digital finance. You understand the potential rewards and want to participate actively.</ListItem>
        <br />
        <H2>How?</H2>
        <ListItem><H3>It&apos;s more straightforward than you think:</H3>
          Imagine becoming a car owner in the CanaryX carpool service. This involves depositing your tokens (your cars) into a liquidity pool (carpool) and earning transaction fees (ride fees) every time a trade (ride) occurs. After depositing your tokens, you receive LP tokens (car keys) as a proof of your contribution to the pool.</ListItem>
        <ListItem><H3>Getting LP Tokens:</H3> After providing liquidity, you&apos;ll receive LP tokens representing your share in the pool. Think of these as a car ownership certificate.</ListItem><br />
        Your LP tokens aren&apos;t just ownership certificates; they&apos;re also seeds that can be planted in CanaryX farms to earn more rewards. Navigate to the Farms page to stake your LP tokens and earn more gains!
        <br />
        <H2>What are the steps to follow?</H2><br />
        <ListItem><H3>Getting Your Cars Ready (Buying Tokens):</H3> Purchase some tokens of your choice from a suitable marketplace and transfer them to your wallet.</ListItem><br />
        <ListItem><H3>Joining the Carpool (CanaryX Add Liquidity Page):</H3> Head over to the CanaryX website and find the &ldquo;Add Liquidity&rdquo; page.</ListItem><br />
        <ListItem><H3>Registering Your Cars (Supplying Tokens) & Receiving Your Car Keys (LP Tokens):</H3> Choose two tokens you want to supply to the liquidity pool. Follow the prompts and complete the process. Once done, you&apos;ll receive LP tokens as a proof of your contribution.</ListItem><br />
        <ListItem><H3>Earning Ride Fees (Transaction Fees):</H3> As trades are made within the pool, you earn a portion of the transaction fees.</ListItem><br />
        <ListItem><H3>Adding Wrapped Songbird tokens:</H3> This is like adding a luxury car with a private driver (FTSO provider), enabling you to earn extra rewards.</ListItem><br />
        <ListItem><H3>Adding a New Token:</H3> Bringing a new token to CanaryX is like introducing a new car model to the carpool, offering variety and new opportunities for other users.</ListItem><br />

        <Blockquote>
          <H3>Remember, while you&apos;re participating in this decentralized finance revolution and potentially earning rewards, there are risks:</H3>
          <br />
          Depreciation (Market Risk): The value of your tokens may decrease due to market fluctuations.
          <br />
          High Wear and Tear (Impermanent Loss): When the relative price of your tokens changes, you may experience loss compared to simply holding your tokens.
          <br />
          Sudden Breakdown (Rug Pulls): In rare cases, the liquidity pool could be drained by an unscrupulous participant.
          <br />
          Tracking New Tokens: Newly added tokens can be traded immediately, but might not show up in the platform&apos;s charts right away. We are continuously working to improve our tracking system.
        </Blockquote>
      </PanelContent>
    </>
  ),

  delegate: (
    <>
      <PanelContent>
        <H1>Understanding the Delegation Page</H1>
        <br />

        <H2>Why delegate?</H2>
        <ListItem>By delegating your Wrapped SGB (WSGB) tokens to the Flare Time Series Oracle (FTSO), you can maximize your gains. You earn weekly rewards while participating in the Flare Network and these tokens can also be used in Liquidity Pools for additional rewards.</ListItem>
        <br />

        <H2>How to delegate before adding to liquidity pools?</H2>
        <ListItem>Before adding your WSGB to the liquidity pools, delegate them to the FTSO. This process involves (wrapping) your SGB tokens into WSGB. This format allows the tokens to be allocated to smart contracts and is necessary for delegation to data providers in the FTSO. Note: delegating SGB involves no risk as the tokens never leave your wallet.</ListItem>
        <br />

        <H2>Who can I delegate to?</H2>
        <ListItem>You can delegate your tokens to your own choice of data providers. Each data provider is rewarded by the network for delivering the most accurate prices, and they share these rewards with their SGB delegators. You can research data providers here.</ListItem>
        <br />

        <H2>What&apos;s the benefit?</H2>
        <ListItem>By delegating first, you ensure your tokens work for you in multiple ways. Not only do you get to share in the rewards distributed by the network for accurate price feeds, but you can then add your delegated tokens to liquidity pools for even more potential gains.</ListItem>
        <br />

        <Blockquote>
          <H3>Remember, although delegating SGB comes with no risk to holders, it&apos;s always important to understand the process fully:</H3>
          <br />
          The delegation process involves wrapping your SGB tokens into WSGB, a format that can be allocated to smart contracts.
          <br />
          Always do your research on the data providers before delegating your tokens.
          <br />
        </Blockquote>
      </PanelContent>

    </>
  ),
};
const SlideOutNotes = ({ currentPage }) => {
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
          top: `calc(20% + 53px)`,
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
        {isOpen && (pageContents[currentPage] || pageContents.swap)}
 
      </StyledPanelContainer>
    </>
  )
}

export default SlideOutNotes
