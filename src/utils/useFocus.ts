//refs provide a way to reference the actual DOM nodes of their rendered react elements.
//using hook version - the idea of the hook is that we'll store the reference
//to the actual html input element in the reference and then when component gets
//mounted so the input is already rendered we will call the method focus on this
//input element
import { useRef, useEffect } from 'react'

export const useFocus = () => {
  //useRef is a generic hook
  const ref = useRef<HTMLInputElement>(null)

  //use effect pass an empty array as a dependent area and then
  //call the ref current focus, we use optional chaining because
  //theoretically current can be undefined.
  //**if the component is already mounted then the element definitely exist */
  useEffect(() => {
    ref.current?.focus()
  }, [])
  
  return ref
}
