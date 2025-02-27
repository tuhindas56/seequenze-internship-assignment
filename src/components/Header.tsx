import { Search } from "lucide-react"
import styled from "styled-components"

const Container = styled.header`
  padding: 2rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 2rem 1rem;
    border-radius: 2rem;
    background-color: #ecedee;

    form {
      position: relative;
      flex: 1;
    }

    svg {
      position: absolute;
      top: 1rem;
      left: 1rem;
    }

    input[type="text"] {
      width: clamp(200px, 100%, 400px);
      padding: 1rem 2rem 1rem 3.5rem;
      border: none;
      border-radius: 36px;
    }

    &,
    input {
      box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    }

    select {
      padding: 1rem;
      background-color: #fff;
      border: 2px solid #b4bbc5;
      border-radius: 8px;
      height: max-content;
    }
  }
`

function Header() {
  return (
    <Container>
      <div>
        <form>
          <Search />
          <input type="text" placeholder="Search Project" />
        </form>
        <select name="filter" id="taskFilter">
          <option>Filter</option>
          <option value="todo">To Do</option>
          <option value="inprogress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>
    </Container>
  )
}
export default Header
