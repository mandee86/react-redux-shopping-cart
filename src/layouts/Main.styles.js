import styled from 'styled-components'

export const StyledContainer = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .main {
    display: flex;
    flex-wrap: nowrap;
  }
  .content {
    flex: 3;
  }
  .sidebar {
    flex: 1;
  }
`;