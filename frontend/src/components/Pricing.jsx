import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import styles from "./Pricing.module.css"
const Pricing = () => {
  
  return (
    <div>
        <div  className={styles.pricing}>Pricing</div>
        <div className={styles.pricing_bar}>
            <div className={styles.option}>
                <div>
                <h4>Price per month when paying for</h4>
                </div>
                <div>
                <select className={styles.menu}>
                    <option>1 year</option>
                    <option>1 Month</option>
                    <option>3 month</option>
                </select>
                </div>
            </div>
            <div className={styles.archive}>
                <h4>Renew plans bought before August 1, 2022</h4>
                <Box className={styles.rounded_up}>Archived Plans</Box>
            </div>
        </div>
    </div>
  )
}

export default Pricing
