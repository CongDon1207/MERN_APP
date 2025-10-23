
import React from 'react'
import { Badge } from './ui/badge'
import { FilterType } from '@/lib/data'
import { Button } from './ui/button'
import { Filter } from 'lucide-react'

const StatsAndFilter = ({
  completedTasksCount = 0,
  activeTasksCount = 0,
  filter = "all"
}) => {
  return (
    <div className="flex flex-row items-start justify-between gap-4">
      {/*phan thong ke*/}
      <div ClassName="flex gap-3">
        <Badge
          variant='secondary'
          className='bg-white/50 text-accent-foreground border-info'>
          {activeTasksCount} {FilterType.active}
        </Badge>

        <Badge
          variant="secondary"
          className="bg-white/50 text-success border-success/20">
          {completedTasksCount} {FilterType.completed}
        </Badge>
      </div>
      {/*phan filter*/}
      <div className='flex flex-row gap-2'>
        {Object.keys(FilterType).map((type) => (
          <Button 
          key= {type}
          variant={filter === type ? 'gradient' : 'ghost'}
          size='sm'
          className='capitalize'>
            <Filter className='size-4'></Filter>
            {FilterType[type]}
          </Button>
        ))}
      </div>

    </div>
  )
}

export default StatsAndFilter
