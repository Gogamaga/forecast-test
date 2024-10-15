'use client'
import {Skeleton as AntdSkeleton} from "antd";
import styles from './styles.module.css'
import {useContext} from "react";
import {LoadingForecastContext} from "@/app/context/loading-forecast";
import {ErrorFetchingContext} from "@/app/context/error-fetching";

interface IProps {
    loading?: boolean
    children: React.ReactNode
}

export default function Skeleton(props: IProps) {
    const {children} = props
    const {loading} = useContext(LoadingForecastContext)
    const {error} = useContext(ErrorFetchingContext)
    return (
        <div className={styles.container}>
            {loading?
                <AntdSkeleton.Node rootClassName={styles.skeletonContainer} active={true} style={{ width: '100%', height: '100%' }} />:
                error?
                    <div className={styles.errorContainer}>
                        <p>ERROR</p>
                    </div>
                    :
                children
            }
        </div>
    )
}