"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import {
    Home,
    TrendingUp,
    Wallet,
    User,
    Bell,
    LogOut,
    ArrowUpRight,
    ArrowDownLeft,
    ChevronRight
} from "lucide-react"

export default function DashboardPage() {
    const router = useRouter()

    const handleLogout = () => {
        // Clear any stored tokens/session
        localStorage.removeItem("token")
        router.push("/auth/login")
    }

    return (
        <div className="min-h-screen bg-linear-to-b from-green-600 via-green-700 to-green-800">
            {/* Header */}
            <div className="px-4 pt-6 pb-8">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <p className="text-white/70 text-sm">Welcome back,</p>
                        <h1 className="text-white text-xl font-semibold">John Doe</h1>
                    </div>
                    <button className="relative p-2" title="Notifications" aria-label="Notifications">
                        <Bell className="w-6 h-6 text-white" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
                    </button>
                </div>

                {/* Balance Card */}
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20">
                    <p className="text-white/70 text-sm mb-1">Total Balance</p>
                    <h2 className="text-white text-3xl font-bold mb-4">৳ 125,000.00</h2>
                    <div className="flex gap-3">
                        <button className="flex-1 bg-white text-green-700 font-semibold py-3 rounded-full flex items-center justify-center gap-2 hover:bg-white/90 transition-all">
                            <ArrowUpRight className="w-5 h-5" />
                            Invest
                        </button>
                        <button className="flex-1 bg-white/20 text-white font-semibold py-3 rounded-full flex items-center justify-center gap-2 hover:bg-white/30 transition-all">
                            <ArrowDownLeft className="w-5 h-5" />
                            Withdraw
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="bg-white rounded-t-3xl min-h-[60vh] p-6">
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-green-50 rounded-2xl p-4">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-2">
                            <TrendingUp className="w-5 h-5 text-green-600" />
                        </div>
                        <p className="text-gray-500 text-sm">Total Profit</p>
                        <p className="text-green-600 text-lg font-bold">৳ 15,250</p>
                    </div>
                    <div className="bg-blue-50 rounded-2xl p-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                            <Wallet className="w-5 h-5 text-blue-600" />
                        </div>
                        <p className="text-gray-500 text-sm">Investments</p>
                        <p className="text-blue-600 text-lg font-bold">5 Active</p>
                    </div>
                </div>

                {/* Recent Transactions */}
                <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-gray-800 font-semibold">Recent Transactions</h3>
                        <button className="text-green-600 text-sm font-medium">See all</button>
                    </div>
                    <div className="space-y-3">
                        {[
                            { name: "Agro Farm Ltd", amount: "+৳ 2,500", type: "profit", date: "Today" },
                            { name: "Green Valley", amount: "-৳ 10,000", type: "investment", date: "Yesterday" },
                            { name: "Fresh Harvest", amount: "+৳ 1,800", type: "profit", date: "Dec 4" },
                        ].map((transaction, index) => (
                            <div key={index} className="flex items-center justify-between bg-gray-50 rounded-xl p-4">
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${transaction.type === "profit" ? "bg-green-100" : "bg-orange-100"
                                        }`}>
                                        {transaction.type === "profit" ? (
                                            <ArrowDownLeft className="w-5 h-5 text-green-600" />
                                        ) : (
                                            <ArrowUpRight className="w-5 h-5 text-orange-600" />
                                        )}
                                    </div>
                                    <div>
                                        <p className="text-gray-800 font-medium">{transaction.name}</p>
                                        <p className="text-gray-400 text-sm">{transaction.date}</p>
                                    </div>
                                </div>
                                <p className={`font-semibold ${transaction.type === "profit" ? "text-green-600" : "text-gray-800"
                                    }`}>
                                    {transaction.amount}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-2">
                    <Link href="/profile" className="flex items-center justify-between bg-gray-50 rounded-xl p-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                <User className="w-5 h-5 text-green-600" />
                            </div>
                            <span className="text-gray-800 font-medium">My Profile</span>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                    </Link>
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center justify-between bg-red-50 rounded-xl p-4"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                                <LogOut className="w-5 h-5 text-red-600" />
                            </div>
                            <span className="text-red-600 font-medium">Logout</span>
                        </div>
                        <ChevronRight className="w-5 h-5 text-red-400" />
                    </button>
                </div>
            </div>

            {/* Bottom Navigation */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3">
                <div className="flex items-center justify-around">
                    <button className="flex flex-col items-center gap-1 text-green-600">
                        <Home className="w-6 h-6" />
                        <span className="text-xs font-medium">Home</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 text-gray-400">
                        <TrendingUp className="w-6 h-6" />
                        <span className="text-xs">Invest</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 text-gray-400">
                        <Wallet className="w-6 h-6" />
                        <span className="text-xs">Wallet</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 text-gray-400">
                        <User className="w-6 h-6" />
                        <span className="text-xs">Profile</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
