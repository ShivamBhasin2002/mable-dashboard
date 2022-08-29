import { IconType } from 'utility/typeDefinitions/componentTypes';

const SVGComponent = (props: IconType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    {...props}
  >
    <defs>
      <pattern
        id="shopIcon"
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height="100%"
        viewBox="0 0 256 256"
      >
        <image
          width={256}
          height={256}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAAdiAAAHYgE4epnbAAAE9GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuNTY2ZWJjNWI0LCAyMDIyLzA1LzA5LTA4OjI1OjU1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjMuNCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMDgtMTBUMTk6MTQ6MjArMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTA4LTEwVDE5OjIxOjI3KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTA4LTEwVDE5OjIxOjI3KzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpmOTBkMzRjMC04MzRlLTQ2MmMtOTg2YS1iNDY0YzdiNzhiOGMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ZjkwZDM0YzAtODM0ZS00NjJjLTk4NmEtYjQ2NGM3Yjc4YjhjIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZjkwZDM0YzAtODM0ZS00NjJjLTk4NmEtYjQ2NGM3Yjc4YjhjIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmOTBkMzRjMC04MzRlLTQ2MmMtOTg2YS1iNDY0YzdiNzhiOGMiIHN0RXZ0OndoZW49IjIwMjItMDgtMTBUMTk6MTQ6MjArMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMy40IChNYWNpbnRvc2gpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pl4pFVEAABA1SURBVHic7d17sF5VfYfx5+TCcUKg0FRHGlCaUm5JgABRepm2ICoBWwIoUlCwLRQVUQpaoGISrDAWKhcrYCm04q2OQAiCoII6gFOogEEJ17ZUwAsqXsAwNiecnP6xTkoSct6997vWvrxnPZ+Zdxg4e6/3tw5nf9d69157v0NjY2NIytOUtguQ1B4DQMqYASBlzACQMmYASBkzAKSMGQBSxqYVbbD4S481UUdZOwL7Aa8C9gFeCmw7/hpuryxlaA3w8/HXj4F7gW8CdwGPt1jXRlYcNKfnzwsDoANmAUcAxwK/33It0nrDwMvHX7sBf7TBzx4EPglcBTzVfGnldfkjwA7APxN+gf+EB78Gx+7Ah4EngcuB7dstZ2JdDIAZwD8AjwLHMxizFGlzpgEnAP8JnEf42+6UrgXAPMJnqNOAl7Rci5TKS4D3Ec4TLGi5lo10KQDeAdwDzG+7EKkmuwJ3Aie2Xch6XQmA04FL8Uy+Jr9h4OPA0rYLgW4EwLmEEyZSTpYBH2q7iLYD4DjgzJZrkNryfsKJ7ta0GQD7ES7vSTm7lBYvcbcVAFsD1+Bnfmk68G/AVm28eVsBsBSY3dJ7S12zA/CBNt64jQDYDTi5hfeVuuyvCetgGtVGAJxPmPZIesE0Wrga1nQA7AMc3PB7SoPiEMKdro1pOgA+CAw1/J7SIFnS5Js1GQALSTv63w68DZhDuJow5MtXg69hwt/enwN3kM4hhGOlEU0GQKqlj08DhxHuv74K+B9gJFHbUlkjhL+9TwB/CBwO/DRR243NApoKgIWEZIv1E8Ive0WCtqSUriP8bT6doK1DgH0TtFOoqQBINfofDTyUqC0ptQeBtyRoZ4iGZgFNBECq0f9a4NYE7Uh1+jKwPEE7byBcNatVEwGQYvQfI1xBkAbBEmBdZBtDNLA6sO4A2Js0Z/6vBb6ToB2pCQ8QzgnEOpSazwXUHQBnE5IsxhgduG9aqmgp8bMACLcM16bOANibdJ/9v52gHalJAzELqDMAHP2VuxSzgCHgbxPUsll1BUCq0X85jv4aXA+QZs3KYmq6IlBXACwjzej/d/GlSK3q9CygjgBYQLiGGes6HP01+FYB1ydo5zBgzwTtbKSOAFhGmtHf6/6aLDq7LiB1ACwA/iRBOytw9NfksQr4QoJ2DifxLCB1ACwjzeh/bnwpUqecTfjbjjEEnJWglv+XMgBSjf7XE74iTJpM7iPNLOAIYI8E7QBpA2ApaUb/cxLUInVR52YBqQJgAfCnCdpx9NdktpI0s4A3kmgWkCoAUoz+4OivyS/VLCDJPQIpAmAvHP2lslYCNyRo503A/NhGUgSAo79UzTI6MguIDYC9CHcrxfoCcHeCdqRBsBK4MUE70bOA2ABINfp7x59ys4z4WcAUIu8RiAmAvUgz+t+Ao7/y8y3giwnaOZKI7xSMCYAlpBn9veNPuVpKy7OAfgNgHmlG/xtx9Fe+vgXclKCdN9PnLKDfAPhgxL4bcvRX7lLNAs7sd8eqUo7+30zQjjTI7iXdLGDXqjv1EwBn97nfphz9pSDFLGAqfdwjUPVAnkd4PlmsL+LoL613L3BzgnaOouIsoGoApBr9fdqPtLElpJkFVFodOK3CtnNJM/oD/EeidiRt7M8IC+seKbNxldE81egvqT6VZgFlD+i5hKeSSuq+o4FdymxYNgAc/aXBMZWSqwPLHNS74OgvDZqjgR2LNioTAMeV3E5Sd0wDji3aqMyB/fr4WiS14OCiDcoEwJwEhUhq3u8UbVAmALaJr0NSC369aAM/20sZMwCkjBkAUsYMACljBoCUMQNAypgBIGWsyvMA+pXi0eF1SvEVTV1m/3qb7P3ryRmAlDEDQMqYASBlzACQMmYASBkzAKSMGQBSxgwAKWMGgJQxA0DKmAEgZaxMAPxv5HtsEbl/nYYTtGH/2mP/evtV0QZlAuAXkUXMjNy/TlslaMP+tcf+9fbzog2aCIDtIvevU4ra7F977F9vzxRt0EQA7By5f51KfYFiAfvXHvvX28+KNigTAE9HFrEwcv867ZugDfvXHvvXW+GxWyYA7o8sYv/I/et0QII27F977F9vhcdumQC4L7KIVwE7RLZRh1cA+yRox/61w/4VW1m0QRMBMAU4JrKNOhxDmnUQ9q8d9q/Yt4s2GBob6/3IscVfemwK4URgzCWJ7wG/DYxEtJHSMPDfwOxE7dm/Ztm/Ys8A2644aE7PA7xMwqwDbokoBGB74C8i20jpBNL98YD9a5r9K/YVSjxQtOwU47q4WgA4B/iNBO3EmgUsraFd+9cM+1fO8jIblQ2AG4G1/dcChK8q/sfINlK4jHr+R9u/Zti/YmuAm8psWDYAfgF8rd9qNnAUcGKCdvp1EvCmGtu3f/Wyf+V8FXi2zIZVzjJe2V8tL3IJsDhRW1UcAlzUwPvYv3rYv/KuKLthlQBYDvxX9VpeZCrwGeDgBG2V9Qbg8zTzTUj2Lz37V96jwPVlN64SAKPARyqXs3kzgBXA2xO118tJhJOYMxp4r/XsXzr2r5oLCFfuSqm60OAq4McV95nIdMIJj89Rz0mdlxJS9WM0M3Jsyv7FsX/V/YhwjJZWNQB+BSypuE+RNwMPA+8kzQMehoF3jbdZ5wmjsuxfNfavf0uo+ACfMisBN/1PU4B/B15d5Y1K+j4hET8DPFlx3x2AtxCmVCkXiaRk/yZm/+LcCfwBm0z/Vxw0p+dO/QQAwALgbsIJkzqsA+4hXHq8F3iE8MtfPf7zmYTVWzsTbpk8gHDjxKA849D+2b+Unh9/nxet/a8rACCcEDy1VHmS6nQ+8Deb+0FRAMQk0hnAHRH7S4p3J3BWvzvHBMBawsqpH0a00XXPUOK5agPM/g22HwCHE3EXY+xnkvUFrIlsp4vWEs7SHkr8o9G7aAR4I/ZvUK0lXKF4KqaRFCcl7gKOJf5moS4ZI9weegtwG+Hs7WirFaU1Spi93Yr9G0RrgaOBb8Q2lOqs5OcJv/CuPFAh1hnApzf492sJ14FLr7DqsHWEFW4b3uJt/wbHCHAkcE2KxlJellgOHMZgT7fGgNOA8zbzs8sJHwkKv22lw9YQHjW1uZtF7F/3rT/4V6RqMPV1yZsIN1H8KHG7TVhD+Ex1QY9tlgOvp8Q3rnTQz4ADCUtbJ2L/uusp4HVUuNGnjDoWJnwd2JvBukT4Q8IfxtUltr0D+F3iH5bapJXA71HuM6P9657bCcfUbakbrmtl0g8Iq5/Or6n9lG4A9qTaL/cRwlLo8+j258pR4MPAfoSay8qlf39Pt/sH4f/Ba6jpcnudSy+fZ4LVSR2xmnBTxqHAT/rYfwQ4nRB0DyesK5WHCbWdSX8nZ3Po3xmELwZ5KGFdqZ1OOJZqMShrr1NaR5jqzyU8/aXwyakFbgPmEx4l1YVFUU8DpxBquj1Be5O9f7cD84Dj6Eb/GpVTAIwBXybclHEk8ETCtp8nnGXeGfgA4SNQ075PWBL6W8DFpB01Jnv/1gGfJPTv/YTvCchCDgHwS8If7x7AQdR78mc18CHCrZ+vJTxNOXaG0csYYbHLkYQD4xxeuCOtDjn071zglYT+Xc3kWkD0IjF3A5ZV5x/IRFYTvhjhBsKln1JPSK3JbGDR+OtAYOvI9p4lrFC8efzVxmi8ocnev+0IA8ciQihs0/D7D8XsXOftwGXVHQBjwHeB74y/vkH43NrF+xOmEz67zh1/zQN+E/g1wh/W+oPnWcKj2J8hTH0f2OB1P91ddj3Z+zeN0K/dCf3cnXDf/zaEvm1NmqcGbSj7AJhJmHK+jPDLnkpYyLH+9T3aHeGlXmL//msNgDYetljVc4RLPl28FCUNtBxOAkqagAEgZcwAkDJmAEgZMwCkjBkAUsYMACljBoCUMQNAypgBIGXMAJAyZgBIGTMApIwZAFLGDAApYwaAlDEDQMqYASBlzACQMmYASBkzAKSMGQBSxgwAKWMGgJQxA0DKmAEgZcwAkDJmAEgZMwCkjBkAUsYMACljBoCUMQNAypgBIGXMAJAyZgBIGTMApIwZAFLGprVdgEp5OXAA8GpgV2AOMAuYCUxvsS6AtcBq4KfAY8DDwF3A14GnWqxLJRgA3TULOAZ4K7Bvy7X0Mh3Ydvy1E/A64N3jP7sb+BTwWUJAqGP8CNA92wMXAU8AF9Ptg7/IQuCjwOPAhcDsdsvRpgyA7pgOvAd4aPyfM9otJ6ktgVOAR4FlwHCbxegFBkA37EKYLl9E+Fw/Wc0AlhLOEezcci3CAOiCI4B7gD3bLqRBexH6fFjLdWTPAGjX24DPMblH/YlsBVwNvL3tQnJmALTnROBfyftKzFTgMuDktgvJlQHQjiOAS9ouokMuBBa3XUSODIDm7QT8C2H0UzCVsF5g17YLyY0B0KwtgGuArdsupINmEhYMtb2yMSsGQLNOJa+z/VUtIKyBUEMMgObMBs5qu4gBsBTYru0icmEANOd9hBVx6m0m8N62i8iFAdCMWcAJbRcxQE4k/M5UMwOgGccwudb2121L4Ki2i8iBAdCMtyZs637CjTXzCNPloZZfM8drOQVYlbCfxyZsSxMwAOq3HbBPgnbWAO8krKO/GHgAeC5Bu7GeI9RyMaG2dwEjCdpdCLwsQTvqwQCo3x8TRsoYa4BFhGWz62ILqtEoYYXjIuJDYAjYP7oi9WQA1G+/BG2cQnjE1qD4GnBagnZS/O7UgwFQv9jlrfcDl6copGGXET4axHBpcM0MgPrtFLn/lXR72j+RUULtMWJ/dypgANRvm8j9b0lRREtia982SRWakAFQv9iHfTyRpIp2PB65f44PSmmUAVC/LSL3X52kinb8MnJ/Hx5aMwNAypgBIGXMAJAyZgBIGTMApIwZAFLGDAApYwaAlDEDQMqYASBlzACQMmYASBkzAKSMGQBSxgwAKWMGgJQxA0DKmAEgZcwAkDJmAEgZMwCkjBkAUsYMACljBoCUMQNAypgBIGXMAJAyZgBIGTMApIwZAFLGDAApYwaAlDEDQMqYASBlzACQMmYASBkzAKSMGQBSxgwAKWMGgJQxA0DKmAEgZcwAkDJmAEgZMwCkjBkAUsYMAClj0/rYZz5wPPAaYEdgy5QFbcZYze13nf3PW1H/nwO+C9wKXAGsqtJ4lRnAMHApcB/wbmAu9R/8knrbknAsvodwbH4M2KLszmVnAMPAzcD+FYuT1JypwEnAbsAiYKRoh7IzgIvw4JcGxQHAR8psWCYA5gN/FVWOpKa9g/DRoKcyAXB8ye0kdcdU4C+LNipzYB8YX4ukFry2aIMyAfCKBIVIat4rizYoEwC5X4eVBlXhsVsmAJ5MUIik5j1RtEGZALglQSGSmveVog3KBMAVwGh8LZIaNApcWbRRmQBYBXw8uhxJTboEeLBoo7LX908FvhpVjqSm3Aq8t8yGZQNgBDiYcKOBHwekbhoFPko4VteW2aHKCr8R4GRgT+BCwkeD1RULlJTWasKxeAGwB+GuwFIHP8DQ2JiX+aVcucZfypgBIGXMAJAyZgBIGTMApIwZAFLGDAApY/8HxXYQAH/2MGkAAAAASUVORK5CYII="
        />
      </pattern>
    </defs>
    <rect id="_001-shop" data-name="001-shop" width={24} height={24} fill="url(#shopIcon)" />
  </svg>
);

export default SVGComponent;
