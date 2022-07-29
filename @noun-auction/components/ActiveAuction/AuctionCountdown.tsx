import { useEffect } from 'react'
import { Flex, Label } from '@zoralabs/zord'

// @noun-auction
import { useNounishAuctionProvider } from '@noun-auction/providers'
import { useCountdown } from '@noun-auction/hooks/useCountdown'
import { SharedDataRendererProps } from '@noun-auction/typings'
import { sideBarUpperLabel } from '@noun-auction/styles/NounishStyles.css'

// @shared
import { lightFont } from 'styles/styles.css'

export function AuctionCountdown({
  showLabels = true,
  endedCopy = 'Bidding & Settling',
  label = 'Ends in',
  layoutDirection = 'row',
  ...props
}: {
  endedCopy?: string
} & SharedDataRendererProps) {
  const { setTimerComplete, layout, rpcAuctionData } = useNounishAuctionProvider()

  const { text, isEnded } = useCountdown(
    rpcAuctionData?.startTime,
    rpcAuctionData?.endTime
  )

  /*
  useEffect(() => {
    console.log(rpcAuctionData)
  }, [rpcAuctionData])
  */

  useEffect(() => {
    if (isEnded) {
      setTimerComplete(true)
    } else {
      setTimerComplete(false)
    }
  }, [isEnded, rpcAuctionData, rpcAuctionData?.startTime, rpcAuctionData?.endTime])

  return (
    <Flex direction={layoutDirection} wrap="wrap" {...props}>
      {showLabels && (
        <Label
          size="md"
          className={[layout === 'sideBarBid' && sideBarUpperLabel, lightFont]}
          color={layout === 'sideBarBid' ? 'tertiary' : 'secondary'}
          style={{ lineHeight: '1.15' }}
          align="right"
        >
          {!isEnded ? label : 'Status'}&nbsp;
        </Label>
      )}
      {!isEnded ? (
        <Label
          size="md"
          style={{ lineHeight: '1.15' }}
          align="right"
          className={[layout === 'sideBarBid' && sideBarUpperLabel]}
        >
          {text}
        </Label>
      ) : (
        <Label
          size="md"
          style={{ lineHeight: '1.15' }}
          align="right"
          className={[layout === 'sideBarBid' && sideBarUpperLabel]}
        >
          {endedCopy}
        </Label>
      )}
    </Flex>
  )
}