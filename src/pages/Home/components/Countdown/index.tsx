import { CountDownContainer, Separator } from './styles'
import { useContext, useEffect } from 'react'
import { differenceInSeconds } from 'date-fns'
import { CyclesContext } from '../../../../contexts/CyclesContext'

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    markActiveCycleAsFinished,
    amountSecondsPassed,
    setSecondsPassed,
  } = useContext(CyclesContext)
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0
  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60
  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    } else {
      document.title = 'Ignite Timer'
    }
  }, [minutes, seconds, activeCycle])

  useEffect(() => {
    let interval: number | undefined
    if (activeCycle) {
      interval = setInterval(() => {
        const secondsPassed = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate),
        )
        if (secondsPassed >= totalSeconds) {
          markActiveCycleAsFinished()
          setSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          setSecondsPassed(secondsPassed)
        }
      }, 1000)
    }
    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [
    activeCycle,
    activeCycleId,
    totalSeconds,
    markActiveCycleAsFinished,
    setSecondsPassed,
  ])

  return (
    <CountDownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountDownContainer>
  )
}
