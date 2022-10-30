import { createContext, FC, ReactElement, ReactNode, useContext } from 'react';

//card component
type Task = {
    id: string
    text: string
}

//column component
type List = {
    id: string
    text: string
    tasks: Task[]
}

export type AppState = {
    lists: List[]
}

const appData: AppState = {
    lists: [
        {
            id: "0",
            text: "To Do",
            tasks: [{id: "c0", text: "Generate app scaffold"}]
        },
        {
            id: "1",
            text: "In Progress",
            tasks: [{id: "c0", text: "Generate app scaffold"}]
        },
        {
            id: "2",
            text: "Done",
            tasks: [{id: "c0", text: "Generate app scaffold"}]
        },
    ]
}

type AppStateContextProps = {
    lists: List[]
    getTasksByListId(id: string): Task[]
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)

export const AppStateProvider = ({ children }: {children: ReactNode}): ReactElement => {
    const { lists } = appData;

    const getTasksByListId = (id: string) => {
        return lists.find((list) => list.id === id)?.tasks || [];
    };

    return (
        //it passes the value to the whole application
        <AppStateContext.Provider value={{lists, getTasksByListId}}>{children}</AppStateContext.Provider>
    );
};


//Custom Hook - get the value and return in
export const useAppState = () => {
    return useContext(AppStateContext)
}