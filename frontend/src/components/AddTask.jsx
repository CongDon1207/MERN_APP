import React from 'react'
import { Card } from './ui/card'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'

const AddTask = () => {
  return (
    <Card className='p-6 border bg-gradient-card shadow-custom-lg'>
      <div className='flex gap-3'>
        <Input
        type='text'
        placeholder='Can phai lam gi?'
        className='h-12 text-base bg-slate-50 focus:border-primary/50 focus:ring-primary/20'
        >
        </Input>

        <Button
          variant="gradient"
          size="xl"
          className="px-6" 
        >
          <Plus className='size-5'/>
          Them 
        </Button>

      </div>

    </Card>
  )
}

export default AddTask
