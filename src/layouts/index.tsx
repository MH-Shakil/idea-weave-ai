import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Header from './header'
import Sidebar from './sidebar'
import { useState } from 'react'
import { cn } from '../lib/utils'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const Layout = (): JSX.Element => {
    const { currentTheme } = useSelector((state: any) => state.theme)
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)

    const toggleSidebarOpen = (): void => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    console.log('currentTheme', currentTheme)

    return (
        <div
            className={`${currentTheme} flex h-screen w-full transition-all duration-500`}
        >
            <DndProvider backend={HTML5Backend}>
                <Sidebar isSidebarOpen={isSidebarOpen} />
            </DndProvider>
            <div
                className={cn(
                    'flex w-full flex-col transition-all duration-300 ease-in-out',
                    isSidebarOpen ? 'ml-[300px]' : 'ml-0'
                )}
            >
                <Header
                    toggleSidebarOpen={toggleSidebarOpen}
                    isSidebarOpen={isSidebarOpen}
                />
                <main
                    className={cn(
                        'flex h-[calc(100%-94px)] flex-col bg-[var(--bg-primary-color)] p-4 transition-all duration-500'
                    )}
                >
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default Layout
