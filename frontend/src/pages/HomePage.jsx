import AddTask from "@/components/AddTask";
import DateTimeFilter from "@/components/DateTimeFilter";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import StatsAndFilter from "@/components/StatsAndFilter";
import TaskList from "@/components/TaskList";
import TaskListPagination from "@/components/TaskListPagination";


function HomePage() {
    return (
        <>
            <div className="min-h-screen w-full relative">
                {/* Aurora Dream Diagonal Flow */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: `
                            radial-gradient(ellipse 80% 60% at 5% 40%, rgba(175, 109, 255, 0.48), transparent 67%),
                            radial-gradient(ellipse 70% 60% at 45% 45%, rgba(255, 100, 180, 0.41), transparent 67%),
                            radial-gradient(ellipse 62% 52% at 83% 76%, rgba(255, 235, 170, 0.44), transparent 63%),
                            radial-gradient(ellipse 60% 48% at 75% 20%, rgba(120, 190, 255, 0.36), transparent 66%),
                            linear-gradient(45deg, #f7eaff 0%, #fde2ea 100%)
                        `,
                    }}
                />

                <div className="container pt-8 mx-auto relative z-10">
                    <div className="w-full max-w-2xl mx-auto space-y-6">
                        {/* Đầu trang */}
                        <Header />

                        <AddTask />

                        <StatsAndFilter />

                        <TaskList />

                        <div className="flex flex-col items-center justify-between gap-6">
                            <TaskListPagination />
                            <DateTimeFilter />
                        </div>

                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage;
